/**
 * @file Table - Component Props
 * @module components/atoms/Table/props
 */

import type { Props } from 'src/types'

interface TableProps extends Props<'table'> {
  /**
   * How the table must be aligned inside the containing document.
   *
   * Possible values:
   *
   * - `center`: Table is displayed in the center of the document
   * - `left`: Table is displayed on the left side of the document
   * - `right`: Table is displayed on the right side of the document
   *
   * Set [`margin-left`][1] and [`margin-right`][2] to `auto` or [`margin`][3]
   * to `0 auto` to achieve a similar effect.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/margin-left
   * [2]: https://developer.mozilla.org/docs/Web/CSS/margin-right
   * [3]: https://developer.mozilla.org/docs/Web/CSS/margin
   *
   * @deprecated
   */
  align?: Props<'table'>['align']

  /**
   * Table background color.
   *
   * Use the [CSS `background-color` property][1] instead.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/background-color
   *
   * @deprecated
   */
  bgcolor?: Props<'table'>['bgcolor']

  /**
   * Integer defining, in pixels, the size of the frame surrounding the table.
   * If set to `0`, the `frame` will be set to `void`.
   *
   * Use the [CSS `border` property][1] instead.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/border
   *
   * @deprecated
   */
  border?: Props<'table'>['border']

  /**
   * Defines the space between the content of a cell and its border, displayed
   * or not.
   *
   * If defined in pixels, this pixel-sized space will be applied to all four
   * sides of the cell's content.
   *
   * If defined using a percentage value, the content will be centered and the
   * total vertical space (top and bottom) will represent this value. The same
   * is true for the total horizontal space (left and right).
   *
   * To achieve a similar effect, apply the [`border-collapse`][1] property to
   * the table, with its value set to `collapse`, and the [`padding`][2]
   * property to the `TableData` components.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/border-collapse
   * [2]: https://developer.mozilla.org/docs/Web/CSS/padding
   *
   * @deprecated
   */
  cellPadding?: Props<'table'>['cellPadding']

  /**
   * Defines the size of the space between two cells in a percentage value or
   * pixels.
   *
   * The attribute is applied both horizontally and vertically, to the space
   * between the top of the table and the cells of the first row, the left of
   * the table and the first column, the right of the table and the last column
   * and the bottom of the table and the last row.
   *
   * To achieve a similar effect, apply the [`border-spacing`][1] property to
   * the table. Note that `border-spacing` does not have any effect if
   * [`border-collapse`][2] is set to `collapse`.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/border-spacing
   * [2]: https://developer.mozilla.org/docs/Web/CSS/border-collapse
   *
   * @deprecated
   */
  cellSpacing?: Props<'table'>['cellSpacing']

  /**
   * Defines which side of the frame surrounding the table must be displayed.
   *
   * Use the CSS [`border-style`][1] and [`border-width`][2] properties instead.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/border-style
   * [2]: https://developer.mozilla.org/docs/Web/CSS/border-width
   *
   * @deprecated
   */
  frame?: Props<'table'>['frame']

  /**
   * Defines where lines should appear in the table.
   *
   * Possible values:
   *
   * - `all`: Display all lines between rows and columns
   * - `columns`: Display lines between columns
   * - `groups`: Display lines between row groups (defined by the `TableHead`,
   *   `TableBody` and `TableFoot` components) and between column groups
   *   (defined by the `Col` and `Colgroup` components) only
   * - `none`: Don't display any lines
   * - `rows`: Display lines between rows
   *
   * To achieve a similar effect, apply the [`border`][1] property to the
   * appropriate `TableHead`, `TableBody`, `TableFoot`, `Col`, or `Colgroup`
   * components.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/border
   * [2]: https://developer.mozilla.org/docs/Web/CSS/margin-right
   * [3]: https://developer.mozilla.org/docs/Web/CSS/margin
   *
   * @deprecated
   *
   * @default 'none'
   */
  rules?: Props<'table'>['rules']

  /**
   * Alternative text that summarizes the content of the table.
   *
   * Use an inner `Caption` component instead.
   *
   * @deprecated
   */
  summary?: Props<'table'>['summary']

  /**
   * Table width.
   *
   * Use the [CSS `width` property][1] instead.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/width
   *
   * @deprecated
   */
  width?: Props<'table'>['width']
}

export default TableProps
