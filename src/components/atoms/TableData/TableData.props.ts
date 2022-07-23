/**
 * @file TableData - Component Props
 * @module components/atoms/TableData/props
 */

import type { Props } from 'src/types'

interface TableDataProps extends Props<'td'> {
  /**
   * Short, abbreviated description of the cell's content.
   *
   * @deprecated
   */
  abbr?: Props<'td'>['abbr']

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
   * [1]: https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-char
   * [2]: https://developer.mozilla.org/docs/Web/HTML/Element/td#attr-charoff
   * [3]: https://bugzilla.mozilla.org/show_bug.cgi?id=2212
   *
   * @deprecated
   *
   * @default 'left'
   */
  align?: Props<'td'>['align']

  /**
   * Non-negative integer indicating how many columns the cell will extend.
   *
   * Values greater than `1000` will be considered invalid and will be set to
   * the default value `1`.
   *
   * @default 1
   */
  colSpan?: Props<'td'>['colSpan']

  /**
   * Space-delimitted list of `id` attributes of `TableHead` components that
   * apply to this component.
   */
  headers?: Props<'td'>['headers']

  /**
   * Recommended cell height.
   *
   * Use the [CSS `height` property][1] instead.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/height
   *
   * @deprecated
   */
  height?: Props<'td'>['height']

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
  rowSpan?: Props<'td'>['rowSpan']

  /**
   * Defines the cells that the header (defined in the `TableHead`) element
   * relates to.
   *
   * Only use this attribute with `TableHead` to define the row or column for
   * which it is a header.
   *
   * @deprecated
   */
  scope?: Props<'td'>['scope']

  /**
   * How text is vertically aligned inside the cell.
   *
   * Possible values:
   *
   * - `baseline`: Positions text near the bottom of the cell and aligns it with
   *   the [baseline][1] of the characters instead of the bottom. If characters
   *   don't descend below the baseline, the baseline value achieves the same
   *   effect as `bottom`
   * - `bottom`: Positions text near the bottom of the cell
   * - `middle`: Centers text in the cell
   * - `top`: Positions text near the top of the cell
   *
   *
   * To achieve a similar effect, use the [CSS `vertical-align` property][2].
   *
   * [1]: https://en.wikipedia.org/wiki/Baseline_%28typography%29
   * [2]: https://developer.mozilla.org/docs/Web/CSS/vertical-align
   *
   * @deprecated
   */
  valign?: Props<'td'>['valign']

  /**
   * Recommended cell width.
   *
   * Use the [CSS `width` property][1] instead.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/width
   *
   * @deprecated
   */
  width?: Props<'td'>['width']
}

export default TableDataProps
