/**
 * @file Enums - FontSize
 * @module enums/FontSize
 */

import type CSSUnitValue from 'src/namespaces/css-unit-value'
import cunit from 'styles/utils/cunit'

/**
 * `theme.font.sizes` map.
 *
 * @enum {CSSUnitValue.em}
 */
const FontSize = Object.freeze({
  8: cunit.em(8),
  10: cunit.em(10),
  12: cunit.em(12),
  14: cunit.em(14),
  16: cunit.em(16),
  18: cunit.em(18),
  20: cunit.em(20),
  24: cunit.em(24),
  28: cunit.em(28),
  32: cunit.em(32),
  36: cunit.em(36),
  48: cunit.em(48),
  60: cunit.em(60),
  84: cunit.em(84),
  96: cunit.em(96)
} as const)

export default FontSize
