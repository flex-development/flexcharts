/**
 * @file Stories - Icon
 * @module components/atoms/Icon/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import cunit from 'styles/utils/cunit'
import dedent from 'ts-dedent'
import Component from './Icon'
import type Props from './Icon.props'

export default {
  argTypes: {
    'data-icon': {
      control: { type: 'select' },
      description: dedent`
        Name of icon to render.

        If omitted, \`children\` will be rendered instead.
      `,
      options: ['close', 'linegraph']
    }
  },
  args: Component.defaultProps,
  component: Component,
  parameters: {},
  title: 'Component Library/Atoms/Icon'
} as Meta<Props>

export const Close: StoryObj<Props> = {
  args: {
    'data-icon': 'close',
    height: cunit.em(48),
    stroke: 'black',
    viewBox: '0 0 24 24',
    width: cunit.em(48)
  }
}

export const LineGraph: StoryObj<Props> = {
  args: {
    'data-icon': 'linegraph',
    fill: 'black',
    height: 10,
    stroke: 'black',
    viewBox: '0 0 80 10',
    width: 80
  },
  name: 'LineGraph'
}
