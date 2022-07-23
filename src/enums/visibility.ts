/**
 * @file Enums - Visibility
 * @module enums/Visibility
 */

/**
 * `theme.visibility` map.
 *
 * @enum {string}
 */
const Visibility = Object.freeze({
  collapse: 'collapse',
  hidden: 'hidden',
  inherit: 'inherit',
  initial: 'initial',
  revert: 'revert',
  unset: 'unset',
  visible: 'visible'
} as const)

export default Visibility
