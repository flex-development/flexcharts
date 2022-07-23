/**
 * @file Storybook Decorators - withConsole
 * @module storybook/decorators/withConsole
 */

import { withConsole as decorator } from '@storybook/addon-console'
import { makeDecorator } from '@storybook/addons'
import type {
  LegacyStoryFn,
  PartialStoryFn,
  StoryContext
} from '@storybook/csf'
import type { DecoratorFn, ReactFramework } from '@storybook/react'
import type { StoryFnReactReturnType as StoryFnReturn } from '@storybook/react/dist/ts3.9/client/preview/types'

/**
 * Re-routes story logs.
 *
 * @see https://storybook.js.org/addons/@storybook/addon-console
 *
 * @const {DecoratorFn} withConsole
 */
const withConsole: DecoratorFn = makeDecorator({
  name: 'withConsole',
  parameterName: 'console',
  skipIfNoParametersOrOptions: false,
  /**
   * Re-routes story logs.
   *
   * The output of:
   *
   * - `console.error`,
   * - `console.info`,
   * - `console.log`, and
   * - `console.warn`
   *
   * will be displayed in the [Actions][1] panel instead of the web console.
   *
   * **Note**: `console.debug` output is always displayed in the web console.
   *
   * [1]: https://storybook.js.org/docs/react/essentials/actions
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
     * @const {StoryContext<ReactFramework>} ctx
     */
    const ctx = context as StoryContext<ReactFramework>

    /**
     * {@link withTests} inner decorator function.
     *
     * @const {(s: typeof Story) => (c: typeof ctx) => StoryFnReturn} decorate
     */
    const decorate = decorator({
      consoleInclude: [context.id],
      panelExclude: []
    }) as (s: typeof Story) => (c: typeof ctx) => StoryFnReturn

    return decorate(Story)(ctx)
  }
})

export default withConsole
