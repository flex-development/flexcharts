/**
 * @file Component - TableData
 * @module components/atoms/TableData
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './TableData.attrs'
import type Props from './TableData.props'
import style from './TableData.style'

/**
 * Renders an HTML `<td>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/td
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement
 */
const TableData = s(a.td).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

TableData.displayName = 'TableData'

TableData.defaultProps = {}

export default TableData
export type { Props as TableDataProps }
