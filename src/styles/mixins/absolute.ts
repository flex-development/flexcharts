/**
 * @file CSS Mixins - absolute
 * @module styles/mixins/absolute
 */

import Position from 'src/enums/position'
import type { StylePropType as PropType } from 'src/namespaces'
import type { CSSObject } from 'styled-components/macro'
import position from './position'

/**
 * Position an element absolutely.
 *
 * @see https://developer.mozilla.org/docs/Web/CSS/position
 * @see https://developer.mozilla.org/docs/Web/CSS/top
 * @see https://developer.mozilla.org/docs/Web/CSS/right
 * @see https://developer.mozilla.org/docs/Web/CSS/bottom
 * @see https://developer.mozilla.org/docs/Web/CSS/left
 *
 * @param {PropType.Positioned} [$top] - Top offset
 * @param {PropType.Positioned} [$right] - Right offset
 * @param {PropType.Positioned} [$bottom] - Bottom offset
 * @param {PropType.Positioned} [$left] - Left offset
 * @return {CSSObject} Object containing CSS properties
 */
const absolute = (
  $top?: PropType.Positioned,
  $right?: PropType.Positioned,
  $bottom?: PropType.Positioned,
  $left?: PropType.Positioned
): CSSObject => position(Position.absolute, $top, $right, $bottom, $left)

export default absolute
