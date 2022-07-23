/**
 * @file Stories - Path
 * @module components/atoms/Path/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Path'
import type Props from './Path.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/Path'
} as Meta<Props>

export const Path: StoryObj<Props> = {
  args: {}
}
