/**
 * @file Component - TableHeader
 * @module components/atoms/TableHeader
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './TableHeader.attrs'
import type Props from './TableHeader.props'
import style from './TableHeader.style'

/**
 * Renders an HTML `<th>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/th
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableCellElement
 */
const TableHeader = s(a.th).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

TableHeader.displayName = 'TableHeader'

TableHeader.defaultProps = {}

export default TableHeader
export type { Props as TableHeaderProps }
