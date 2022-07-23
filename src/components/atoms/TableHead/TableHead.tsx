/**
 * @file Component - TableHead
 * @module components/atoms/TableHead
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './TableHead.attrs'
import type Props from './TableHead.props'
import style from './TableHead.style'

/**
 * Renders an HTML `<thead>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/thead
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableSectionElement
 */
const TableHead = s(a.thead).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

TableHead.displayName = 'TableHead'

TableHead.defaultProps = {}

export default TableHead
export type { Props as TableHeadProps }
