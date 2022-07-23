/**
 * @file Component - Defs
 * @module components/atoms/Defs
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Defs.attrs'
import type Props from './Defs.props'
import style from './Defs.style'

/**
 * Renders a SVG `<defs>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/defs
 * @see https://developer.mozilla.org/docs/Web/API/SVGDefsElement
 */
const Defs = s(a.defs).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Defs.displayName = 'Defs'

Defs.defaultProps = {}

export default Defs
export type { Props as DefsProps }
