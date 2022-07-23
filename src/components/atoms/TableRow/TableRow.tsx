/**
 * @file Component - TableRow
 * @module components/atoms/TableRow
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './TableRow.attrs'
import type Props from './TableRow.props'
import style from './TableRow.style'

/**
 * Renders an HTML `<tr>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/tr
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement
 */
const TableRow = s(a.tr).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

TableRow.displayName = 'TableRow'

TableRow.defaultProps = {}

export default TableRow
export type { Props as TableRowProps }
