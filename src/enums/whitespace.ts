/**
 * @file Enums - Whitespace
 * @module enums/Whitespace
 */

/**
 * `theme.whitespace` map.
 *
 * @enum {string}
 */
const Whitespace = Object.freeze({
  break: 'break-spaces',
  normal: 'normal',
  nowrap: 'nowrap',
  pre: 'pre',
  preline: 'pre-line',
  prewrap: 'pre-wrap'
} as const)

export default Whitespace
