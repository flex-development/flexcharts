/**
 * @file Stories - TableHeader
 * @module components/atoms/TableHeader/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './TableHeader'
import type Props from './TableHeader.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/TableHeader'
} as Meta<Props>

export const TableHeader: StoryObj<Props> = {
  args: {},
  name: Component.displayName
}
