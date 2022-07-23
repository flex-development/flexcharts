/**
 * @file Enums - LineHeight
 * @module enums/LineHeight
 */

import type CSSUnitValue from 'src/namespaces/css-unit-value'

/**
 * `theme.lineheights` map.
 *
 * @enum {CSSUnitValue.percentage | 'inherit' | 'normal'}
 */
const LineHeight = Object.freeze({
  inherit: 'inherit',
  normal: 'normal',
  tight: '112.5%' as CSSUnitValue.percentage,
  snug: '125%' as CSSUnitValue.percentage,
  relaxed: '133%' as CSSUnitValue.percentage,
  loose: '150%' as CSSUnitValue.percentage
} as const)

export default LineHeight
