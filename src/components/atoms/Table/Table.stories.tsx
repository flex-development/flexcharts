/**
 * @file Stories - Table
 * @module components/atoms/Table/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Table'
import type Props from './Table.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/Table'
} as Meta<Props>

export const Table: StoryObj<Props> = {
  args: {}
}
