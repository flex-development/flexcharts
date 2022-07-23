/**
 * @file Stories - G
 * @module components/atoms/G/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './G'
import type Props from './G.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/G'
} as Meta<Props>

export const G: StoryObj<Props> = {
  args: {}
}
