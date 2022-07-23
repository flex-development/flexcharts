/**
 * @file Stories - Box
 * @module components/atoms/Box/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Box'
import type Props from './Box.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/Box'
} as Meta<Props>

export const Box: StoryObj<Props> = {
  args: {}
}
