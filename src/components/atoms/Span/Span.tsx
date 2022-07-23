/**
 * @file Component - Span
 * @module components/atoms/Span
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Span.attrs'
import type Props from './Span.props'
import style from './Span.style'

/**
 * Renders an HTML `<span>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/span
 * @see https://developer.mozilla.org/docs/Web/API/HTMLSpanElement
 */
const Span = s(a.span).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Span.displayName = 'Span'

Span.defaultProps = {}

export default Span
export type { Props as SpanProps }
