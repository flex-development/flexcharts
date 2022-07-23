/**
 * @file Storybook Decorators - withTheme
 * @module storybook/decorators/withTheme
 */

import { makeDecorator } from '@storybook/addons'
import type { LegacyStoryFn, StoryContext } from '@storybook/csf'
import type { DecoratorFn, ReactFramework } from '@storybook/react'
import ThemeProvider from 'providers/ThemeProvider/ThemeProvider'
import theme from 'src/styles/theme'

/**
 * Wraps the current story in a {@link ThemeProvider}.
 *
 * @see https://styled-components.com/docs/api#themeprovider
 *
 * @const {DecoratorFn} withTheme
 */
const withTheme: DecoratorFn = makeDecorator({
  name: 'withTheme',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  /**
   * Renders `story` within a {@link ThemeProvider}.
   *
   * @param {LegacyStoryFn} story - Current story
   * @param {StoryContext} context - Story context
   * @return {JSX.Element} `story` wrapped in `ThemeProvider`
   */
  wrapper: (story: LegacyStoryFn, context: StoryContext): JSX.Element => {
    /**
     * {@link story} as React framework story.
     *
     * @const {LegacyStoryFn<ReactFramework>} Story
     */
    const Story = story as LegacyStoryFn<ReactFramework>

    /**
     * {@link context} as React framework story context.
     *
     * @const {StoryContext<ReactFramework>} context
     */
    const ctx = context as StoryContext<ReactFramework>

    return <ThemeProvider theme={theme}>{Story(ctx)}</ThemeProvider>
  }
})

export default withTheme
