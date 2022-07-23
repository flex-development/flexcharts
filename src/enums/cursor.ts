/**
 * @file Enums - Cursor
 * @module enums/Cursor
 */

import SizeKeyword from './size-keyword'

/**
 * `theme.cursors` map.
 *
 * @enum {string}
 */
const Cursor = Object.freeze({
  auto: SizeKeyword.AUTO,
  crosshair: 'crosshair',
  default: 'default',
  grab: 'grab',
  no: 'not-allowed',
  pointer: 'pointer',
  text: 'text',
  wait: 'wait',
  zin: 'zoom-in',
  zout: 'zoom-out'
} as const)

export default Cursor
