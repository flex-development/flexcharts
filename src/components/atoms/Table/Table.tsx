/**
 * @file Component - Table
 * @module components/atoms/Table
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Table.attrs'
import type Props from './Table.props'
import style from './Table.style'

/**
 * Renders an HTML `<table>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/table
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableElement
 */
const Table = s(a.table).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

Table.displayName = 'Table'

Table.defaultProps = {}

export default Table
export type { Props as TableProps }
