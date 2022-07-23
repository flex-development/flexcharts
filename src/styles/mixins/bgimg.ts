/**
 * @file CSS Mixins - bgimg
 * @module styles/mixins/bgimg
 */

import $ from 'config/style-props'
import type { StylePropType } from 'src/namespaces'
import type { CSSObject } from 'styled-components/macro'

/**
 * Sets a component background image.
 *
 * @see https://developer.mozilla.org/docs/Web/CSS/background-image
 * @see https://developer.mozilla.org/docs/Web/CSS/background-position
 * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
 * @see https://developer.mozilla.org/docs/Web/CSS/background-size
 *
 * @param {StylePropType.BgImage} [$bgimg=null] - Image filename
 * @param {StylePropType.BgSize} [$bgsize='cover'] - `background-size`
 * @param {StylePropType.BgPosition} [$bgpos='center'] - `background-position`
 * @param {StylePropType.BgRepeat} [$bgrepeat='norepeat'] - `background-repeat`
 * @return {CSSObject} Object containing CSS properties
 */
const bgimg = (
  $bgimg: StylePropType.BgImage = null,
  $bgsize: StylePropType.BgSize = 'cover',
  $bgpos: StylePropType.BgPosition = 'center',
  $bgrepeat: StylePropType.BgRepeat = 'norepeat'
): CSSObject => $({ $bgimg, $bgpos, $bgrepeat, $bgsize })

export default bgimg
