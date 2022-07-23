/**
 * @file Component - Path
 * @module components/atoms/Path
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Path.attrs'
import type Props from './Path.props'
import style from './Path.style'

/**
 * Renders a SVG `<path>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/API/SVGPathElement
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/path
 */
const Path = s(a.path).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Path.displayName = 'Path'

Path.defaultProps = {}

export default Path
export type { Props as PathProps }
