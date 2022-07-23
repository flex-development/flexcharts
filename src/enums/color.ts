/**
 * @file Enums - Color
 * @module enums/Color
 */

/**
 * `theme.colors` map.
 *
 * @enum {string}
 */
const Color = Object.freeze({
  black: '#000000',
  charcoal: '#59595b',
  cream: '#f7f6f1',
  current: 'currentcolor',
  cyan: '#029eda',
  forestgreen: '#1d5c42',
  ghost: 'transparent',
  gold: '#ebb700',
  green: '#00985f',
  grey: '#808080',
  inherit: 'inherit',
  lavender: '#9c5fb5',
  lime: '#c8da2c',
  navy: '#253d86',
  orange: '#e17000',
  red: '#e00034',
  tan: '#f5f4ed',
  teal: '#6fc7b2',
  tusk: '#d8d5d3',
  ultramarine: '#335aff',
  warmgrey: '#ebebeb',
  white: '#ffffff'
} as const)

export default Color
