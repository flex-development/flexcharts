/**
 * @file Enums - BgRepeat
 * @module enums/BgRepeat
 */

/**
 * `theme.background.repeat` map.
 *
 * @enum {string}
 */
const BgRepeat = Object.freeze({
  norepeat: 'no-repeat',
  repeat: 'repeat',
  round: 'round',
  x: 'repeat-x',
  y: 'repeat-y'
} as const)

export default BgRepeat
