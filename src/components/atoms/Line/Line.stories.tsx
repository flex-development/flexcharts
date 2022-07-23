/**
 * @file Stories - Line
 * @module components/atoms/Line/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Svg from 'components/Svg/Svg'
import theme from 'src/styles/theme'
import cunit from 'styles/utils/cunit'
import Component from './Line'
import type Props from './Line.props'

export default {
  args: {
    ...Component.defaultProps,
    x2: theme.sizes.fluid,
    y1: theme.sizes[50],
    y2: theme.sizes[50]
  },
  component: Component,
  parameters: {},
  render(args: Props): JSX.Element {
    return (
      <Svg height={theme.sizes.fluid} width={theme.sizes.fluid}>
        <Component {...args} />
      </Svg>
    )
  },
  title: 'Component Library/Atoms/Line'
} as Meta<Props>

export const Line: StoryObj<Props> = {
  args: {
    stroke: theme.colors.black,
    strokeWidth: cunit.px(theme.border.widths.thick)
  }
}
