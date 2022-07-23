/**
 * @file Stories - Paragraph
 * @module components/atoms/Paragraph/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Paragraph'
import type Props from './Paragraph.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {},
  title: 'Component Library/Atoms/Paragraph'
} as Meta<Props>

export const Paragraph: StoryObj<Props> = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog'
  }
}
