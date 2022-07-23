/**
 * @file Stories - Caption
 * @module components/atoms/Caption/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Caption'
import type Props from './Caption.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/Caption'
} as Meta<Props>

export const Caption: StoryObj<Props> = {
  args: {}
}
