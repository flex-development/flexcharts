/**
 * @file Stories - TableHead
 * @module components/atoms/TableHead/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './TableHead'
import type Props from './TableHead.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/TableHead'
} as Meta<Props>

export const TableHead: StoryObj<Props> = {
  args: {},
  name: Component.displayName
}
