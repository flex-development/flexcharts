/**
 * @file Stories - Col
 * @module components/atoms/Col/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Col'
import type Props from './Col.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/Col'
} as Meta<Props>

export const Col: StoryObj<Props> = {
  args: {}
}
