/**
 * @file Stories - TableData
 * @module components/atoms/TableData/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './TableData'
import type Props from './TableData.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/TableData'
} as Meta<Props>

export const TableData: StoryObj<Props> = {
  args: {},
  name: Component.displayName
}
