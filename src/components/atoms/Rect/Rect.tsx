/**
 * @file Component - Rect
 * @module components/atoms/Rect
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Rect.attrs'
import type Props from './Rect.props'
import style from './Rect.style'

/**
 * Renders a SVG `<rect>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/rect
 * @see https://developer.mozilla.org/docs/Web/API/SVGRectElement
 */
const Rect = s(a.rect).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Rect.displayName = 'Rect'

Rect.defaultProps = {}

export default Rect
export type { Props as RectProps }
