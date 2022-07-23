/**
 * @file Stories - TableRow
 * @module components/atoms/TableRow/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './TableRow'
import type Props from './TableRow.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/TableRow'
} as Meta<Props>

export const TableRow: StoryObj<Props> = {
  args: {},
  name: Component.displayName
}
