/**
 * @file Stories - TableBody
 * @module components/atoms/TableBody/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './TableBody'
import type Props from './TableBody.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/TableBody'
} as Meta<Props>

export const TableBody: StoryObj<Props> = {
  args: {},
  name: Component.displayName
}
