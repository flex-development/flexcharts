/**
 * @file Component - Svg
 * @module components/atoms/Svg
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Svg.attrs'
import type Props from './Svg.props'
import style from './Svg.style'

/**
 * Renders an SVG `<svg>` element.
 *
 * For a simplied [`transform`][1] API, pass `props.left` and/or `props.top`.
 *
 * [1]: https://developer.mozilla.org/docs/Web/SVG/Attribute/transform
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/svg
 * @see https://developer.mozilla.org/docs/Web/API/SVGElement
 */
const Svg = s(a.svg).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Svg.displayName = 'Svg'

Svg.defaultProps = {
  xmlns: 'https://w3.org/2000/svg'
}

export default Svg
export type { Props as SvgProps }
