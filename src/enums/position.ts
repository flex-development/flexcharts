/**
 * @file Enums - Position
 * @module enums/Position
 */

/**
 * `theme.position` map.
 *
 * @enum {string}
 */
const Position = Object.freeze({
  absolute: 'absolute',
  fixed: 'fixed',
  relative: 'relative',
  static: 'static',
  sticky: 'sticky'
} as const)

export default Position
