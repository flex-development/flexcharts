/**
 * @file Component - Circle
 * @module components/atoms/Circle
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Circle.attrs'
import type Props from './Circle.props'
import style from './Circle.style'

/**
 * Renders a SVG `<circle>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/circle
 * @see https://developer.mozilla.org/docs/Web/API/SVGCircleElement
 */
const Circle = s(a.circle).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

Circle.displayName = 'Circle'

Circle.defaultProps = {}

export default Circle
export type { Props as CircleProps }
