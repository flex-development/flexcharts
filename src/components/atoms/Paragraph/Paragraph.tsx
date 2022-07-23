/**
 * @file Component - Paragraph
 * @module ui/components/atoms/Paragraph/impl
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Paragraph.attrs'
import type Props from './Paragraph.props'
import style from './Paragraph.style'

/**
 * Renders an HTML `<p>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/p
 * @see https://developer.mozilla.org/docs/Web/API/HTMLParagraphElement
 */
const Paragraph = s(a.p).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

Paragraph.displayName = 'Paragraph'

Paragraph.defaultProps = {}

export default Paragraph
export type { Props as ParagraphProps }
