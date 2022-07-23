/**
 * @file Stories - Heading
 * @module components/atoms/Heading/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Component from './Heading'
import type Props from './Heading.props'

export default {
  argTypes: {
    as: {
      control: { type: 'inline-radio' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: { type: { summary: 'TagHeading' } }
    }
  },
  args: {
    ...Component.defaultProps,
    children: 'The quick brown fox jumped over the lazy dog'
  },
  component: Component,
  parameters: {},
  title: 'Component Library/Atoms/Heading'
} as Meta<Props>

export const H1: StoryObj<Props> = {
  args: {},
  name: 'H1'
}

export const H2: StoryObj<Props> = {
  args: {
    as: 'h2'
  },
  name: 'H2'
}

export const H3: StoryObj<Props> = {
  args: {
    as: 'h3'
  },
  name: 'H3'
}

export const H4: StoryObj<Props> = {
  args: {
    as: 'h4'
  },
  name: 'H4'
}

export const H5: StoryObj<Props> = {
  args: {
    as: 'h5'
  },
  name: 'H5'
}

export const H6: StoryObj<Props> = {
  args: {
    as: 'h6'
  },
  name: 'H6'
}
