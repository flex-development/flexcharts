/**
 * @file Component - Data
 * @module components/atoms/Data
 */

import { animated as a, type AnimatedComponent } from '@react-spring/web'
import $ from 'config/style-props'
import type { ThemeSpec } from 'src/interfaces'
import type { Attributes } from 'src/types'
import s, { type StyledComponent } from 'styled-components/macro'
import attrs from './Data.attrs'
import type Props from './Data.props'
import style from './Data.style'

/**
 * Renders an HTML `<data>` element.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/data
 * @see https://developer.mozilla.org/docs/Web/API/HTMLDataElement
 */
const Data: StyledComponent<
  AnimatedComponent<'data'>,
  ThemeSpec,
  Props,
  keyof Attributes<'data'>
> = s(a.data).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Data.displayName = 'Data'

Data.defaultProps = {}

export default Data
export type { Props as DataProps }
