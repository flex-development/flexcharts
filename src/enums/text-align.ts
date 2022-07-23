/**
 * @file Enums - TextAlign
 * @module enums/TextAlign
 */

/**
 * `theme.text.align` map.
 *
 * @enum {string}
 */
const TextAlign = Object.freeze({
  center: 'center',
  centermoz: '-moz-center',
  centerwebkit: '-webkit-center',
  end: 'end',
  inherit: 'inherit',
  initial: 'initial',
  justify: 'justify',
  justifyall: 'justify-all',
  left: 'left',
  match: 'match-parent',
  revert: 'revert',
  right: 'right',
  start: 'start',
  unset: 'unset'
} as const)

export default TextAlign
