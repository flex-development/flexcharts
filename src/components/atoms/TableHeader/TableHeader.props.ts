/**
 * @file TableHeader - Component Props
 * @module components/atoms/TableHeader/props
 */

import type { Props } from 'src/types'

interface TableHeaderProps extends Props<'th'> {
  /**
   * Short, abbreviated description of the cell's content.
   */
  abbr?: Props<'th'>['abbr']

  /**
   * How the cell content's horizontal alignment will be handled.
   *
   * Possible values:
   *
   * - `center`: Content is centered in cell
   * - `char` (with text only): Content is aligned to a character inside the
   *   component with minimal offset. This character is defined by the [char][1]
   *   and [charoff][2] attributes (see [bug 2212][3])
   * - `justify` (with text only): Content is stretched out inside the cell so
   *   that it covers its entire width
   * - `left`: Content is aligned to the left of the cell
   * - `right`: Content is aligned to the right of the cell
   *
   * [1]: https://developer.mozilla.org/docs/Web/HTML/Element/th#attr-char
   * [2]: https://developer.mozilla.org/docs/Web/HTML/Element/th#attr-charoff
   * [3]: https://bugzilla.mozilla.org/show_bug.cgi?id=2212
   *
   * @deprecated
   *
   * @default 'left'
   */
  align?: Props<'th'>['align']

  /**
   * Non-negative integer indicating how many columns the cell will extend.
   *
   * Values greater than `1000` will be considered invalid and will be set to
   * the default value `1`.
   *
   * @default 1
   */
  colSpan?: Props<'th'>['colSpan']

  /**
   * Space-delimitted list of `id` attributes of `TableHead` components that
   * apply to this component.
   */
  headers?: Props<'th'>['headers']

  /**
   * Non-negative integer indicating how many rows the cell will extend.
   *
   * If `0`, the row'll extend until the end of the table section (`TableHead`,
   * `TableBody`, `TableFoot`, even if implicitly defined) it belongs to.
   *
   * Values greater than `65534` will be clamped.
   *
   * @default 1
   */
  rowSpan?: Props<'th'>['rowSpan']

  /**
   * Defines the cells that the header element relates to.
   *
   * Possible values:
   *
   * - `col`: Header relates to all cells of the column it belongs to
   * - `colgroup`: Header belongs to a colgroup and relates to all of its cells
   * - `row`: Header relates to all cells of the row it belongs to
   * - `rowgroup`: Header belongs to a rowgroup and relates to all of its cells.
   *   These cells can be placed to the right or the left of the header,
   *   depending on the value of the `dir` attribute in the `Table`
   *
   * If `scope` is not specified, or its value is invalid, then browsers
   * automatically select the set of cells to which the header cell applies.
   */
  scope?: Props<'th'>['scope']
}

export default TableHeaderProps
