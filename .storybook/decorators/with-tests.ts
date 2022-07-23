/**
 * @file Storybook Decorators - withTests
 * @module storybook/decorators/withTests
 */

import { withTests as decorator } from '@storybook/addon-jest'
import { ADDON_ID } from '@storybook/addon-jest/dist/esm/shared'
import { makeDecorator } from '@storybook/addons'
import { pretty as logger } from '@storybook/client-logger'
import type {
  LegacyStoryFn,
  PartialStoryFn,
  StoryContext
} from '@storybook/csf'
import type { DecoratorFn, ReactFramework } from '@storybook/react'
import type { ViTestResults } from 'tests/interfaces'

/** @const {string} REPORT_FILE - Test report file id */
const REPORT_FILE: string = 'tests/report.json'

/** @var {ViTestResults | undefined} results - Test results object */
let results: ViTestResults | undefined

try {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  results = (await import(REPORT_FILE)).default as ViTestResults
} catch {
  results = {} as ViTestResults
} finally {
  logger.debug(
    `<span style="background:black;color:#1ea7fd;"> preview </span> received <span style="color:#ffae00">${ADDON_ID}</span>`,
    `(${results?.numTotalTests ?? 0})`,
    results! as unknown as string
  )
}

/**
 * Adds tests results to current story.
 *
 * @see https://storybook.js.org/addons/@storybook/addon-jest
 *
 * @const {DecoratorFn} withTests
 */
const withTests: DecoratorFn = makeDecorator({
  name: 'withTests',
  parameterName: 'jest',
  skipIfNoParametersOrOptions: false,
  /**
   * Renders `story` with test results.
   *
   * @param {LegacyStoryFn} story - Current story
   * @param {StoryContext} context - Story context
   * @return {Promise<JSX.Element>} `story` with test results
   */
  wrapper: (story: LegacyStoryFn, context: StoryContext): JSX.Element => {
    /**
     * {@link story} as React framework story.
     *
     * @const {PartialStoryFn<ReactFramework>} Story
     */
    const Story = story as PartialStoryFn<ReactFramework>

    /**
     * {@link context} as React framework story context.
     *
     * @const {StoryContext<ReactFramework>} context
     */
    const ctx = context as StoryContext<ReactFramework>

    /**
     * {@link withTests} inner decorator function.
     *
     * @const {DecoratorFn} decorate
     */
    const decorate: DecoratorFn = decorator({
      filesExt: '/__tests__/.*(e2e|functional|integration)?.spec.tsx?$',
      results
    })

    return decorate(Story, ctx)
  }
})

export default withTests
