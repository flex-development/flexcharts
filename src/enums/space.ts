/**
 * @file Enums - Space
 * @module enums/Space
 */

import type CSSUnitValue from 'src/namespaces/css-unit-value'
import cunit from 'styles/utils/cunit'
import SizeKeyword from './size-keyword'

/**
 * `theme.space` map.
 *
 * @enum {CSSUnitValue.rem | SizeKeyword.AUTO | 0}
 */
const Space = Object.freeze({
  0: 0,
  1: cunit.rem(1),
  2: cunit.rem(2),
  4: cunit.rem(4),
  8: cunit.rem(8),
  10: cunit.rem(10),
  12: cunit.rem(12),
  14: cunit.rem(14),
  16: cunit.rem(16),
  18: cunit.rem(18),
  20: cunit.rem(20),
  24: cunit.rem(24),
  28: cunit.rem(28),
  32: cunit.rem(32),
  36: cunit.rem(36),
  40: cunit.rem(40),
  48: cunit.rem(48),
  56: cunit.rem(56),
  60: cunit.rem(60),
  64: cunit.rem(64),
  72: cunit.rem(72),
  80: cunit.rem(80),
  84: cunit.rem(84),
  96: cunit.rem(96),
  112: cunit.rem(112),
  128: cunit.rem(128),
  auto: SizeKeyword.AUTO
} as const)

export default Space
