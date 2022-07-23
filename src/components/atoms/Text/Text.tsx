/**
 * @file Component - Text
 * @module components/atoms/Text
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Text.attrs'
import type Props from './Text.props'
import style from './Text.style'

/**
 * Renders a SVG `<text>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/text
 * @see https://developer.mozilla.org/docs/Web/API/SVGTextElement
 */
const Text = s(a.text).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Text.displayName = 'Text'

Text.defaultProps = {}

export default Text
export type { Props as TextProps }
