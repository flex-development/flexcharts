/**
 * @file CSS Mixins - nobreaking
 * @module styles/mixins/nobreaking
 */

import $ from 'src/config/style-props'
import Whitespace from 'src/enums/whitespace'
import type { CSSObject } from 'styled-components/macro'
import important from '../utils/important'

/**
 * Prevent a text element from breaking onto the next line.
 *
 * @see https://developer.mozilla.org/docs/Web/CSS/white-space
 *
 * @param {boolean} [i=false] - Add `!important`
 * @return {CSSObject} Object containing CSS properties
 */
const nobreaking = (i: boolean = false): CSSObject => {
  return $({
    $whitespace: i ? important(Whitespace.nowrap) : Whitespace.nowrap
  })
}

export default nobreaking
