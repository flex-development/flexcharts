/**
 * @file Stories - Rect
 * @module components/atoms/Rect/stories
 */

import { config, useSpring } from '@react-spring/web'
import type { Meta, StoryObj } from '@storybook/react'
import Svg from 'components/Svg/Svg'
import useTheme from 'hooks/use-theme/use-theme'
import useWindowSize from 'hooks/use-window-size/use-window-size'
import theme from 'src/styles/theme'
import Component from './Rect'
import type Props from './Rect.props'

export default {
  args: { ...Component.defaultProps, x: theme.sizes[50], y: theme.sizes[50] },
  component: Component,
  parameters: {},
  render(args: Props): JSX.Element {
    const Wrapper = (): JSX.Element => {
      const { height, width } = useWindowSize()

      const theme = useTheme()

      const [{ fill }] = useSpring<{ fill: string }>(() => {
        return {
          config: config.molasses,
          from: { fill: args.fill ?? theme.colors.red },
          loop: { reverse: true },
          to: { fill: theme.colors.lime }
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
  title: 'Component Library/Atoms/Rect'
} as Meta<Props>

export const Rect: StoryObj<Props> = {
  args: {
    fill: theme.colors.red,
    height: 50,
    rx: 13,
    width: 50
  },
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}
