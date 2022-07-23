/**
 * @file Component - Gradient
 * @module components/atoms/Gradient
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Gradient.attrs'
import type Props from './Gradient.props'
import style from './Gradient.style'

/**
 * Renders a SVG `<linearGradient>` or `<radialGradient>` element.
 *
 * Use `props.as` to change the gradient type.
 *
 * @see https://developer.mozilla.org/docs/Web/API/SVGLinearGradientElement
 * @see https://developer.mozilla.org/docs/Web/API/SVGRadialGradientElement
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/linearGradient
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/radialGradient
 */
const Gradient = s(a.linearGradient).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

Gradient.displayName = 'Gradient'

Gradient.defaultProps = {
  $stops: [],
  as: 'linearGradient'
}

export default Gradient
export type { Props as GradientProps }
