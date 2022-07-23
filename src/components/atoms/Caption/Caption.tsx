/**
 * @file Component - Caption
 * @module components/atoms/Caption
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Caption.attrs'
import type Props from './Caption.props'
import style from './Caption.style'

/**
 * Renders an HTML `<caption>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/caption
 * @see https://developer.mozilla.org/docs/Web/API/HTMLTableCaptionElement
 */
const Caption = s(a.caption).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

Caption.displayName = 'Caption'

Caption.defaultProps = {}

export default Caption
export type { Props as CaptionProps }
