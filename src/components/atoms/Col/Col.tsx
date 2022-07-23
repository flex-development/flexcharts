/**
 * @file Component - Col
 * @module components/atoms/Col
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Col.attrs'
import type Props from './Col.props'
import style from './Col.style'

/**
 * Renders an HTML `<col>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/col
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableColElement
 */
const Col = s(a.col).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Col.displayName = 'Col'

Col.defaultProps = {}

export default Col
export type { Props as ColProps }
