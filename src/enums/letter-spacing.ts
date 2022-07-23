/**
 * @file Enums - LetterSpacing
 * @module enums/LetterSpacing
 */

import type CSSUnitValue from 'src/namespaces/css-unit-value'
import cunit from 'styles/utils/cunit'

/**
 * `theme.letterspacings` map.
 *
 * @enum {CSSUnitValue.px}
 */
const LetterSpacing = Object.freeze({
  tighter: cunit.px('-2%'),
  tight: cunit.px('-1%'),
  normal: cunit.px('0%'),
  wide: cunit.px('2%'),
  wider: cunit.px('3%'),
  widest: cunit.px('5%')
} as const)

export default LetterSpacing
