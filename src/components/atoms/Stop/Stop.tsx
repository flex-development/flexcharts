/**
 * @file Component - Stop
 * @module components/atoms/Stop
 */

import { animated as a } from '@react-spring/web'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Stop.attrs'
import type Props from './Stop.props'
import style from './Stop.style'

/**
 * Renders a SVG `<stop>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element/stop
 * @see https://developer.mozilla.org/docs/Web/API/SVGStopElement
 */
const Stop = s(a.stop).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Stop.displayName = 'Stop'

Stop.defaultProps = {}

export default Stop
export type { Props as StopProps }
