/**
 * @file Enums - GridSpan
 * @module enums/GridSpan
 */

import SizeKeyword from './size-keyword'

/**
 * `theme.grid.span` map.
 *
 * @enum {string}
 */
const GridSpan = Object.freeze({
  1: 'span 1 / span 1',
  2: 'span 2 / span 2',
  3: 'span 3 / span 3',
  4: 'span 4 / span 4',
  5: 'span 5 / span 5',
  6: 'span 6 / span 6',
  7: 'span 7 / span 7',
  8: 'span 8 / span 8',
  9: 'span 9 / span 9',
  10: 'span 10 / span 10',
  11: 'span 11 / span 11',
  12: 'span 12 / span 12',
  auto: SizeKeyword.AUTO,
  full: '1 / -1'
} as const)

export default GridSpan
