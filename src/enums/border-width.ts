/**
 * @file Enums - BorderWidth
 * @module enums/BorderWidth
 */

import type CSSUnitValue from 'src/namespaces/css-unit-value'
import cunit from 'styles/utils/cunit'
import Space from './space'

/**
 * `theme.border.widths` map.
 *
 * @enum {CSSUnitValue.rem}
 */
const BorderWidth = Object.freeze({
  none: Space[0],
  thick: Space[4],
  thin: Space[2],
  thinner: Space[1],
  thinnest: cunit.rem(0.5)
} as const)

export default BorderWidth
