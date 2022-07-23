/**
 * @file Stories - TableFoot
 * @module components/atoms/TableFoot/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './TableFoot'
import type Props from './TableFoot.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {
    previewTabs: { canvas: null },
    viewMode: 'docs'
  },
  title: 'Component Library/Atoms/TableFoot'
} as Meta<Props>

export const TableFoot: StoryObj<Props> = {
  args: {},
  name: Component.displayName
}
