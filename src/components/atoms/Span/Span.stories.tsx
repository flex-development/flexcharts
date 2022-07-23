/**
 * @file Stories - Span
 * @module components/atoms/Span/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Span'
import type Props from './Span.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {},
  title: 'Component Library/Atoms/Span'
} as Meta<Props>

export const Span: StoryObj<Props> = {
  args: {
    children: 'Span text'
  }
}
