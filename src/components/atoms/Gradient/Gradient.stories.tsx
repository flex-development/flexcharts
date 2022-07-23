/**
 * @file Stories - Gradient
 * @module components/atoms/Gradient/stories
 */

import type { Meta, StoryObj } from '@storybook/react'
import Circle from 'components/Circle/Circle'
import Defs from 'components/Defs/Defs'
import Rect from 'components/Rect/Rect'
import Svg from 'components/Svg/Svg'
import useTheme from 'hooks/use-theme/use-theme'
import useWindowSize from 'hooks/use-window-size/use-window-size'
import rgba from 'polished/lib/color/rgba'
import theme from 'src/styles/theme'
import Component from './Gradient'
import type Props from './Gradient.props'

export default {
  args: Component.defaultProps,
  component: Component,
  parameters: {},
  title: 'Component Library/Atoms/Gradient'
} as Meta<Props>

export const Linear: StoryObj<Props> = {
  args: {
    $stops: [
      {
        offset: theme.sizes[15],
        stopColor: rgba('#1c8dd3', theme.opacities[100])
      },
      {
        offset: theme.sizes[95],
        stopColor: rgba(theme.colors.cyan, theme.opacities[80])
      }
    ],
    gradientTransform: 'rotate(0,260)',
    id: 'linear-gradient'
  },
  render(args: Props): JSX.Element {
    const Wrapper = (): JSX.Element => {
      const { height, width } = useWindowSize()

      const theme = useTheme()

      return (
        <Svg
          height={theme.sizes.fluid}
          viewBox={`0 0 ${width} ${height}`}
          width={theme.sizes.fluid}
        >
          <Defs>
            <Component {...args} />
          </Defs>
          <Rect height={height} fill={`url('#${args.id}')`} width={width} />
        </Svg>
      )
    }

    return <Wrapper />
  }
}

export const Radial: StoryObj<Props> = {
  args: {
    $stops: [
      {
        offset: theme.sizes[15],
        stopColor: rgba(theme.colors.lime, theme.opacities[85])
      },
      {
        offset: theme.sizes[35],
        stopColor: rgba(theme.colors.cyan, theme.opacities[95])
      },
      {
        offset: theme.sizes[75],
        stopColor: rgba(theme.colors.navy, theme.opacities[100])
      }
    ],
    as: 'radialGradient',
    gradientTransform: 'rotate(0,260)',
    id: 'radial-gradient'
  },
  render(args: Props): JSX.Element {
    const Wrapper = (): JSX.Element => {
      const { height, width } = useWindowSize()

      const theme = useTheme()

      return (
        <Svg
          height={theme.sizes.fluid}
          style={{ background: [...args.$stops!].pop()!.stopColor }}
          viewBox={`0 0 ${width} ${height}`}
          width={theme.sizes.fluid}
        >
          <Defs>
            <Component {...args} />
          </Defs>
          <Circle
            cx={theme.sizes[50]}
            cy={theme.sizes[50]}
            fill={`url('#${args.id}')`}
            r={200}
          />
        </Svg>
      )
    }

    return <Wrapper />
  }
}
