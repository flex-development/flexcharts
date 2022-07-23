/**
 * @file CSS Mixins - border
 * @module styles/mixins/border
 */

import type { NumberString } from '@flex-development/tutils'
import type { CSSFragment } from 'src/types'
import { css } from 'styled-components/macro'
import cunit from '../utils/cunit'

/**
 * Creates a border property.
 *
 * @see https://developer.mozilla.org/docs/Web/CSS/border
 *
 * @param {NumberString} [$borderwidth=cunit.rem(1)] - `border-width`
 * @param {string} [$bordercolor='black'] - `border-color`
 * @param {string} [$borderstyle='solid'] - `border-style`
 * @return {CSSFragment} CSS fragment
 */
const border = (
  $borderwidth: NumberString = cunit.rem(1),
  $bordercolor: string = 'black',
  $borderstyle: string = 'solid'
): CSSFragment => css`
  ${$borderwidth} ${$borderstyle} ${$bordercolor}
`

export default border
