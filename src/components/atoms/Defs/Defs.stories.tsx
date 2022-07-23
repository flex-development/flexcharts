/**
 * @file Stories - Defs
 * @module components/atoms/Defs/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Defs'
import type Props from './Defs.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/Defs'
} as Meta<Props>

export const Defs: StoryObj<Props> = {
  args: {}
}
