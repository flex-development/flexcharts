/**
 * @file Enums - Size
 * @module enums/Size
 */

import type CSSUnitValue from 'src/namespaces/css-unit-value'
import SizeKeyword from './size-keyword'

/**
 * `theme.sizes` map.
 *
 * @enum {CSSUnitValue.percentage | SizeKeyword}
 */
const Size = Object.freeze({
  0: '0%' as CSSUnitValue.percentage,
  5: '5%' as CSSUnitValue.percentage,
  10: '10%' as CSSUnitValue.percentage,
  15: '15%' as CSSUnitValue.percentage,
  20: '20%' as CSSUnitValue.percentage,
  25: '25%' as CSSUnitValue.percentage,
  30: '30%' as CSSUnitValue.percentage,
  35: '35%' as CSSUnitValue.percentage,
  40: '40%' as CSSUnitValue.percentage,
  45: '45%' as CSSUnitValue.percentage,
  50: '50%' as CSSUnitValue.percentage,
  55: '55%' as CSSUnitValue.percentage,
  60: '60%' as CSSUnitValue.percentage,
  65: '65%' as CSSUnitValue.percentage,
  70: '70%' as CSSUnitValue.percentage,
  75: '75%' as CSSUnitValue.percentage,
  80: '80%' as CSSUnitValue.percentage,
  85: '85%' as CSSUnitValue.percentage,
  90: '90%' as CSSUnitValue.percentage,
  95: '95%' as CSSUnitValue.percentage,
  100: '100%' as CSSUnitValue.percentage,
  auto: SizeKeyword.AUTO,
  available: SizeKeyword.MOZ_AVAILABLE,
  fluid: '100%' as CSSUnitValue.percentage,
  max: SizeKeyword.MAX_CONTENT,
  min: SizeKeyword.MIN_CONTENT
} as const)

export default Size
