/**
 * @file Component - TSpan
 * @module components/atoms/TSpan
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './TSpan.attrs'
import type Props from './TSpan.props'
import style from './TSpan.style'

/**
 * Renders a SVG `<tspan>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/tspan
 * @see https://developer.mozilla.org/docs/Web/API/SVGTSpanElement
 */
const TSpan = s(a.tspan).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

TSpan.displayName = 'TSpan'

TSpan.defaultProps = {}

export default TSpan
export type { Props as TSpanProps }
