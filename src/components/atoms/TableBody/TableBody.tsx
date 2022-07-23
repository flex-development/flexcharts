/**
 * @file Component - TableBody
 * @module components/atoms/TableBody
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './TableBody.attrs'
import type Props from './TableBody.props'
import style from './TableBody.style'

/**
 * Renders an HTML `<tbody>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/tbody
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableSectionElement
 */
const TableBody = s(a.tbody).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

TableBody.displayName = 'TableBody'

TableBody.defaultProps = {}

export default TableBody
export type { Props as TableBodyProps }
