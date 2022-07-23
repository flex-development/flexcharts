/**
 * @file Enums - FontWeight
 * @module enums/FontWeight
 */

/**
 * `theme.font.weights` map.
 *
 * @enum {100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}
 */
const FontWeight = Object.freeze({
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
} as const)

export default FontWeight
