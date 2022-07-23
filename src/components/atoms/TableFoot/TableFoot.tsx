/**
 * @file Component - TableFoot
 * @module components/atoms/TableFoot
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './TableFoot.attrs'
import type Props from './TableFoot.props'
import style from './TableFoot.style'

/**
 * Renders an HTML `<tfoot>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/tfoot
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableSectionElement
 */
const TableFoot = s(a.tfoot).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

TableFoot.displayName = 'TableFoot'

TableFoot.defaultProps = {}

export default TableFoot
export type { Props as TableFootProps }
