/**
 * @file Component - Line
 * @module components/atoms/Line
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Line.attrs'
import type Props from './Line.props'
import style from './Line.style'

/**
 * Renders a SVG `<line>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/line
 * @see https://developer.mozilla.org/docs/Web/API/SVGLineElement
 */
const Line = s(a.line).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Line.displayName = 'Line'

Line.defaultProps = {}

export default Line
export type { Props as LineProps }
