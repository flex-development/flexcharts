/**
 * @file Component - Heading
 * @module components/atoms/Heading
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Heading.attrs'
import type Props from './Heading.props'
import style from './Heading.style'

/**
 * Renders an HTML `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, or `<h6>` element.
 *
 * Use `props.as` to change the heading level.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 * @see https://developer.mozilla.org/docs/Web/API/HTMLHeadingElement
 */
const Heading = s(a.h1).attrs<Props>(attrs)<Props>(p => [
  style(p),
  $(p),
  p.$css
])

Heading.displayName = 'Heading'

Heading.defaultProps = {
  as: 'h1'
}

export default Heading
export type { Props as HeadingProps }
