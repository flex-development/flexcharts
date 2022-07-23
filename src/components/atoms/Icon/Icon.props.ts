/**
 * @file Icon - Component Props
 * @module components/atoms/Icon/props
 */

import type SvgProps from 'components/Svg/Svg.props'

interface IconProps extends SvgProps {
  /**
   * Name of icon to render.
   *
   * If omitted, `children` will be rendered instead.
   */
  'data-icon'?: 'close' | 'linegraph'
}

export default IconProps
