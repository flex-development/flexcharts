/**
 * @file Component - Icon
 * @module components/atoms/Icon
 */

import Svg from 'components/Svg/Svg'
import $ from 'config/style-props'
import s from 'styled-components/macro'
import attrs from './Icon.attrs'
import type Props from './Icon.props'
import style from './Icon.style'

/**
 * Renders an icon.
 *
 * Use `props['data-icon']` to select an icon.
 */
const Icon = s(Svg).attrs<Props>(attrs)<Props>(p => [style(p), $(p), p.$css])

Icon.displayName = 'Icon'

Icon.defaultProps = {}

export default Icon
export type { Props as IconProps }
