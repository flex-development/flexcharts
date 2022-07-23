/**
 * @file Enums - ZIndex
 * @module enums/ZIndex
 */

import SizeKeyword from './size-keyword'

/**
 * `theme.zindices` map.
 *
 * @enum {SizeKeyword.AUTO | number}
 */
const ZIndex = Object.freeze({
  auto: SizeKeyword.AUTO,
  bar: 1100,
  drawer: 1200,
  ghost: -1,
  modal: 1300,
  tooltip: 1500,
  zero: 0
} as const)

export default ZIndex
