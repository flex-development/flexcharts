/**
 * @file Enums - BorderRadius
 * @module enums/BorderRadius
 */

import type CSSUnitValue from 'src/namespaces/css-unit-value'
import Space from './space'

/**
 * `theme.border.radii` map.
 *
 * @enum {CSSUnitValue.rem}
 */
const BorderRadius = Object.freeze({
  default: Space[4],
  lg: Space[8],
  none: Space[0],
  sm: Space[2]
} as const)

export default BorderRadius
