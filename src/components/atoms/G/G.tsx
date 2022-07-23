/**
 * @file Component - G
 * @module components/atoms/G
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './G.attrs'
import type Props from './G.props'
import style from './G.style'

/**
 * Renders a SVG `<g>` element.
 *
 * For a simplied [`transform`][1] API, pass `props.left` and/or `props.top`.
 *
 * [1]: https://developer.mozilla.org/docs/Web/SVG/Attribute/transform
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/g
 * @see https://developer.mozilla.org/docs/Web/API/SVGGElement
 */
const G = s(a.g).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

G.displayName = 'G'

G.defaultProps = {
  left: undefined,
  top: undefined,
  transform: undefined
}

export default G
export type { Props as GProps }
