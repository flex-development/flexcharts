/**
 * @file CSS Mixins - position
 * @module styles/mixins/position
 */

import $ from 'config/style-props'
import { clean } from 'fast-clean'
import type { StylePropType } from 'src/namespaces'
import type { CSSObject } from 'styled-components/macro'

/**
 * Shorthand for component positioning.
 *
 * @see https://developer.mozilla.org/docs/Web/CSS/position
 * @see https://developer.mozilla.org/docs/Web/CSS/top
 * @see https://developer.mozilla.org/docs/Web/CSS/right
 * @see https://developer.mozilla.org/docs/Web/CSS/bottom
 * @see https://developer.mozilla.org/docs/Web/CSS/left
 *
 * @param {StylePropType.Position} [$position] - Position type
 * @param {StylePropType.Positioned} [$top] - Top offset
 * @param {StylePropType.Positioned} [$right] - Right offset
 * @param {StylePropType.Positioned} [$bottom] - Bottom offset
 * @param {StylePropType.Positioned} [$left] - Left offset
 * @return {CSSObject} Object containing CSS properties
 */
const position = (
  $position?: StylePropType.Position,
  $top?: StylePropType.Positioned,
  $right?: StylePropType.Positioned,
  $bottom?: StylePropType.Positioned,
  $left?: StylePropType.Positioned
): CSSObject => clean($({ $bottom, $left, $position, $right, $top }))

export default position
