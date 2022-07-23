/**
 * @file Stories - Colgroup
 * @module components/atoms/Colgroup/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Colgroup'
import type Props from './Colgroup.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/Colgroup'
} as Meta<Props>

export const Colgroup: StoryObj<Props> = {
  args: {}
}
