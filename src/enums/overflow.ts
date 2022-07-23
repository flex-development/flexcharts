/**
 * @file Enums - Overflow
 * @module enums/Overflow
 */

import SizeKeyword from './size-keyword'

/**
 * `theme.overflow` map.
 *
 * @enum {string}
 */
const Overflow = Object.freeze({
  auto: SizeKeyword.AUTO,
  clip: 'clip',
  hidden: 'hidden',
  hiddenvisible: 'hidden visible',
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  scroll: 'scroll',
  unset: 'unset',
  visible: 'visible'
} as const)

export default Overflow
