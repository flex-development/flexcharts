/**
 * @file Enums - Display
 * @module enums/Display
 */

/**
 * `theme.display` map.
 *
 * @enum {string}
 */
const Display = Object.freeze({
  block: 'block',
  contents: 'contents',
  flex: 'flex',
  flowroot: 'flow-root',
  grid: 'grid',
  inherit: 'inherit',
  initial: 'initial',
  inline: 'inline',
  inlineblock: 'inline-block',
  inlineflex: 'inline-flex',
  inlinegrid: 'inline-grid',
  listitem: 'list-item',
  none: 'none',
  revert: 'revert',
  table: 'table',
  tablecell: 'table-cell',
  tablerow: 'table-row',
  unset: 'unset'
} as const)

export default Display
