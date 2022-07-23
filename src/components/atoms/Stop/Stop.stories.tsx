/**
 * @file Stories - Stop
 * @module components/atoms/Stop/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Stop'
import type Props from './Stop.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/Stop'
} as Meta<Props>

export const Stop: StoryObj<Props> = {
  args: {}
}
