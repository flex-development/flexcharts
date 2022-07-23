/**
 * @file G - Component Props
 * @module components/atoms/G/props
 */

import type { SVGAttributes } from 'react'
import type { Props } from 'src/types'

interface GProps extends Props<'g'> {
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
  transform?: SVGAttributes<SVGGElement>['transform']
}

export default GProps
