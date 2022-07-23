/**
 * @file Col - Component Props
 * @module components/atoms/Col/props
 */

import type { Props } from 'src/types'

interface ColProps extends Props<'col'> {
  /**
   * Positive integer indicating the number of consecutive columns the component
   * will span.
   *
   * @default 1
   */
  span?: Props<'col'>['span']

  /**
   * Default width for each column in the current column group.
   *
   * In addition to the standard pixel and percentage values, this attribute
   * might take the special form `0*`, which means that the width of each column
   * in the group should be the minimum width necessary to hold the column's
   * contents. Relative widths such as `5*` also can be used.
   *
   * @deprecated
   */
  width?: Props<'col'>['width']
}

export default ColProps
