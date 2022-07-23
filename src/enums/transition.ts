/**
 * @file Enums - Transition
 * @module enums/Transition
 */

/**
 * `theme.transitions` map.
 *
 * @enum {string}
 */
const Transition = Object.freeze({
  all10: 'all 0.1s ease-in-out',
  all15: 'all 0.15s ease-in-out',
  all20: 'all 0.2s ease-in-out'
} as const)

export default Transition
