/**
 * @file Stories - TSpan
 * @module components/atoms/TSpan/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './TSpan'
import type Props from './TSpan.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/TSpan'
} as Meta<Props>

export const TSpan: StoryObj<Props> = {
  args: {},
  name: Component.displayName
}
