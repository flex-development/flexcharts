/**
 * @file Stories - Data
 * @module components/atoms/Data/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Data'
import type Props from './Data.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {},
  title: 'Component Library/Atoms/Data'
} as Meta<Props>

export const Data: StoryObj<Props> = {
  args: {
    children: 'Storybook',
    value: 'storybook'
  }
}
