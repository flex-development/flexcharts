/**
 * @file Enums - BorderStyle
 * @module enums/BorderStyle
 */

/**
 * `theme.border.styles` map.
 *
 * @enum {string}
 */
const BorderStyle = Object.freeze({
  dashed: 'dashed',
  dotted: 'dotted',
  double: 'double',
  groove: 'groove',
  hidden: 'hidden',
  inherit: 'inherit',
  initial: 'initial',
  inset: 'inset',
  none: 'none',
  outset: 'outset',
  revert: 'revert',
  ridge: 'ridge',
  solid: 'solid',
  unset: 'unset'
} as const)

export default BorderStyle
