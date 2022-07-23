/**
 * @file Svg - Component Props
 * @module components/atoms/Svg/props
 */

import type { SVGAttributes } from 'react'
import type { Props } from 'src/types'

interface SvgProps extends Props<'svg'> {
  /**
   * Left offset.
   */
  left?: number

  /**
   * Top offset.
   */
  top?: number

  /**
   * Override `top` and `left` to provide the entire `transform` string.
   *
   * @see https://developer.mozilla.org/docs/Web/SVG/Attribute/transform
   */
  transform?: SVGAttributes<SVGSVGElement>['transform']
}

export default SvgProps
