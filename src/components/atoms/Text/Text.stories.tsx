/**
 * @file Stories - Text
 * @module components/atoms/Text/stories
 */

import { useSpring } from '@react-spring/web'
import type { Meta, StoryObj } from '@storybook/react'
import Svg from 'components/Svg/Svg'
import useTheme from 'hooks/use-theme/use-theme'
import useWindowSize from 'hooks/use-window-size/use-window-size'
import { useState } from 'react'
import theme from 'src/styles/theme'
import { css } from 'styled-components/macro'
import Component from './Text'
import type Props from './Text.props'

export default {
  args: { ...Component.defaultProps, dx: theme.sizes[50], dy: theme.sizes[50] },
  component: Component,
  parameters: {},
  render(args: Props): JSX.Element {
    const Wrapper = (): JSX.Element => {
      const { height, width } = useWindowSize()

      const [clicked, setclicked] = useState(false)

      const theme = useTheme()

      const { scale } = useSpring<{ scale: number }>({
        config: { duration: 1000 },
        from: { scale: 0 },
        scale: clicked ? 1 : 0
      })

      return (
        <Svg
          $css={css`
            &:hover {
              cursor: ${p => p.theme.cursors.pointer};
            }
          `}
          height={theme.sizes.fluid}
          onClick={() => setclicked(!clicked)}
          viewBox={`0 0 ${width} ${height}`}
          width={theme.sizes.fluid}
        >
          <Component
            {...args}
            $fontweight={theme.font.weights.semibold}
            style={{
              fontSize: scale
                .to({
                  output: [1, 0.9, 1.15, 0.9, 1.1, 1.03, 1].map(n => n * 128),
                  range: [0, 0.25, 0.45, 0.55, 0.65, 0.75, 1]
                })
                .to(value => theme.cunit.em(value)),
              fontWeight: theme.font.weights.semibold,
              willChange: 'font-size'
            }}
          />
        </Svg>
      )
    }

    return <Wrapper />
  },
  title: 'Component Library/Atoms/Text'
} as Meta<Props>

export const Text: StoryObj<Props> = {
  args: {
    children: 'click',
    dominantBaseline: 'middle',
    fill: theme.colors.lime,
    textAnchor: 'middle'
  },
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}
