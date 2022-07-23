/**
 * @file Component - Box
 * @module components/atoms/Box
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Box.attrs'
import type Props from './Box.props'
import style from './Box.style'

/**
 * Renders an HTML `<div>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/div
 * @see https://developer.mozilla.org/docs/Web/API/HTMLDivElement
 */
const Box = s(a.div).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Box.displayName = 'Box'

Box.defaultProps = {}

export default Box
export type { Props as BoxProps }
