/**
 * @file Enums - PointerEvent
 * @module enums/PointerEvent
 */

import SizeKeyword from './size-keyword'

/**
 * `theme.pointerevents` map.
 *
 * @enum {string}
 */
const PointerEvent = Object.freeze({
  all: 'all',
  auto: SizeKeyword.AUTO,
  fill: 'fill',
  inherit: 'inherit',
  initial: 'initial',
  none: 'none',
  painted: 'painted',
  revert: 'revert',
  stroke: 'stroke',
  unset: 'unset',
  visible: 'visible',
  visiblefill: 'visibleFill',
  visiblepainted: 'visiblePainted',
  visiblestroke: 'visibleStroke'
} as const)

export default PointerEvent
