/**
 * @file Stories - Circle
 * @module components/atoms/Circle/stories
 */

import { config, useSpring } from '@react-spring/web'
import type { Meta, StoryObj } from '@storybook/react'
import Svg from 'components/Svg/Svg'
import useTheme from 'hooks/use-theme/use-theme'
import useWindowSize from 'hooks/use-window-size/use-window-size'
import theme from 'src/styles/theme'
import Component from './Circle'
import type Props from './Circle.props'

export default {
  args: { ...Component.defaultProps, cx: theme.sizes[50], cy: theme.sizes[50] },
  component: Component,
  parameters: {},
  render(args: Props): JSX.Element {
    const Wrapper = (): JSX.Element => {
      const { height, width } = useWindowSize()

      const theme = useTheme()

      const [{ fill }] = useSpring<{ fill: string }>(() => {
        return {
          config: config.slow,
          from: { fill: args.fill ?? theme.colors.lime },
          loop: { reverse: true },
          to: { fill: theme.colors.teal }
        }
      }, [args.fill])

      return (
        <Svg
          height={theme.sizes.fluid}
          viewBox={`0 0 ${width} ${height}`}
          width={theme.sizes.fluid}
        >
          <Component {...args} fill={fill} />
        </Svg>
      )
    }

    return <Wrapper />
  },
  title: 'Component Library/Atoms/Circle'
} as Meta<Props>

export const Circle: StoryObj<Props> = {
  args: {
    fill: theme.colors.lime,
    r: 37.5
  },
  parameters: {
    backgrounds: {
      default: 'black'
    }
  }
}
