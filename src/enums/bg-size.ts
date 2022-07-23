/**
 * @file Enums - BgSize
 * @module enums/BgSize
 */

import SizeKeyword from './size-keyword'

/**
 * `theme.background.size` map.
 *
 * @enum {string}
 */
const BgSize = Object.freeze({
  auto: SizeKeyword.AUTO,
  contain: 'contain',
  cover: 'cover'
} as const)

export default BgSize
