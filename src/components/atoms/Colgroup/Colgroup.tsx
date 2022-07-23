/**
 * @file Component - Colgroup
 * @module components/atoms/Colgroup
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Colgroup.attrs'
import type Props from './Colgroup.props'
import style from './Colgroup.style'

/**
 * Renders an HTML `<colgroup>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/colgroup
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableColElement
 */
const Colgroup = s(a.colgroup).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

Colgroup.displayName = 'Colgroup'

Colgroup.defaultProps = {}

export default Colgroup
export type { Props as ColgroupProps }
