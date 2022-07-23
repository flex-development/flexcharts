/**
 * @file Namespaces - StylePropType
 * @module namespaces/StylePropType
 */

import type { NumberString } from '@flex-development/tutils'
import type SizeKeyword from 'src/enums/size-keyword'
import type { ThemeSpec } from 'src/interfaces'
import type { StyleProp } from 'src/types'
import type { CSSProp } from 'styled-components/macro'
import type CSSUnitValue from './css-unit-value'
import type ThemeSpecPath from './theme-spec-path'

/**
 * Common custom style prop types.
 *
 * @see https://styled-system.com/custom-props
 */
namespace StylePropType {
  /**
   * Background style properties.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  export type Bg = StyleProp

  /**
   * Background color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  export type BgColor = StyleProp<ThemeSpecPath.Color, 'themed'>

  /**
   * Background images.
   *
   * The value should be comma-delimitted string of image filenames (extension
   * included). The assets path prefix will be added automatically.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  export type BgImage = StyleProp<string>

  /**
   * Background position.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  export type BgPosition =
    | StyleProp
    | StyleProp<CSSUnitValue.unit>
    | StyleProp<ThemeSpecPath.BackgroundPosition, 'themed'>

  /**
   * Background repetitions.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  export type BgRepeat =
    | StyleProp
    | StyleProp<ThemeSpecPath.BackgroundRepeat, 'themed'>

  /**
   * Background sizes.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  export type BgSize = Size | StyleProp<ThemeSpecPath.BackgroundSize>

  /**
   * Border properties:
   *
   * - `border-width`
   * - `border-style`
   * - `border-color`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  export type Border = StyleProp<string>

  /**
   * Border color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  export type BorderColor = StyleProp<ThemeSpecPath.Color, 'themed'>

  /**
   * Border radius.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  export type BorderRadius =
    | StyleProp<CSSUnitValue.unit>
    | StyleProp<ThemeSpecPath.BorderRadius, 'themed'>

  /**
   * Border style.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  export type BorderStyle =
    | StyleProp<ThemeSpecPath.BorderStyle, 'themed'>
    | StyleProp<ThemeSpecPath.BorderStyle>

  /**
   * Border width.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  export type BorderWidth =
    | Space
    | StyleProp<ThemeSpecPath.BorderWidth, 'themed'>

  /**
   * Additional CSS.
   *
   * @see {@link CSSProp}.
   */
  export type CSS = CSSProp<ThemeSpec>

  /**
   * Color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   * @see https://developer.mozilla.org/docs/Web/CSS/fill
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke
   */
  export type Color = StyleProp<ThemeSpecPath.Color, 'themed'>

  /**
   * Mouse cursors.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  export type Cursor = StyleProp<ThemeSpecPath.Cursor, 'themed'>

  /**
   * Displays.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  export type Display = StyleProp<ThemeSpecPath.Display, 'themed'>

  /**
   * Font family.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  export type FontFamily =
    | StyleProp<'monospace' | 'sans-serif' | 'serif'>
    | StyleProp<ThemeSpecPath.FontFamily, 'themed'>

  /**
   * Font size.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  export type FontSize =
    | StyleProp<CSSUnitValue.unit>
    | StyleProp<ThemeSpecPath.FontSize, 'themed'>

  /**
   * Font weight.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  export type FontWeight = StyleProp<ThemeSpecPath.FontWeight, 'themed'>

  /**
   * Grid properties:
   *
   * - [`grid-auto-columns`][1]
   * - [`grid-auto-flow`][2]
   * - [`grid-auto-rows`][3]
   * - [`grid-template-areas`][4]
   * - [`grid-template-columns`][5]
   * - [`grid-template-rows`][6]
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   * [2]: https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   * [3]: https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   * [4]: https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   * [5]: https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   * [6]: https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  export type Grid = StyleProp<ThemeSpecPath.GridTemplate, 'themed'>

  /**
   * Grid item sizes and locations within a grid column or row.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  export type GridSpan =
    | StyleProp<'auto'>
    | StyleProp<ThemeSpecPath.GridSpan, 'themed'>

  /**
   * Line names and track sizing functions of inner grid columns and rows.
   *
   * [1]: https://developer.mozilla.org/docs/Glossary/Grid_Column
   * [2]: https://developer.mozilla.org/docs/Glossary/Grid_Rows
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  export type GridTemplate =
    | StyleProp<Exclude<SizeKeyword, '-moz-available'>>
    | StyleProp<ThemeSpecPath.GridTemplate, 'themed'>

  /**
   * Letter spacings.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  export type LetterSpacing =
    | StyleProp<NumberString>
    | StyleProp<ThemeSpecPath.LetterSpacing, 'themed'>

  /**
   * Line heights.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  export type LineHeight =
    | StyleProp<NumberString>
    | StyleProp<ThemeSpecPath.LineHeight, 'themed'>

  /**
   * Opacity.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/fill-opacity
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  export type Opacity =
    | StyleProp<CSSUnitValue.percentage>
    | StyleProp<ThemeSpecPath.Opacity, 'themed'>

  /**
   * Flex or grid item container order.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  export type Order =
    | StyleProp<number>
    | StyleProp<ThemeSpecPath.GridOrder, 'themed'>

  /**
   * Content overflow.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  export type Overflow = StyleProp<ThemeSpecPath.Overflow>

  /**
   * Pointer events.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  export type PointerEvents = StyleProp<ThemeSpecPath.PointerEvent>

  /**
   * Position values:
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  export type Position = StyleProp<ThemeSpecPath.Position>

  /**
   * Positioning values.
   *
   * Has no effect if [`position`][1] is not defined.
   *
   * [1]: https://developer.mozilla.org/docs/Web/CSS/position
   *
   * @see {@link Position}
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  export type Positioned = StyleProp

  /**
   * Component sizes.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  export type Size =
    | Space
    | StyleProp<CSSUnitValue.unit | number | `${number}${'vh' | 'vw'}`>
    | StyleProp<ThemeSpecPath.Size, 'themed'>

  /**
   * Spacing values.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-dasharray
   * @see https://developer.mozilla.org/docs/Web/CSS/stroke-width
   */
  export type Space =
    | StyleProp<CSSUnitValue.unit>
    | StyleProp<ThemeSpecPath.Space, 'themed'>

  /**
   * Text alignment.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  export type TextAlign = StyleProp<ThemeSpecPath.TextAlign>

  /**
   * Text transformations.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  export type TextTransform = StyleProp<ThemeSpecPath.TextTransform>

  /**
   * Shorthand property for:
   *
   * - `transition-property`
   * - `transition-duration`
   * - `transition-timing-function`
   * - `transition-delay`
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  export type Transition =
    | StyleProp<string>
    | StyleProp<ThemeSpecPath.Transition, 'themed'>

  /**
   * Visibilities.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  export type Visibility = StyleProp<ThemeSpecPath.Visibility>

  /**
   * Whitespace.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  export type Whitespace = StyleProp<ThemeSpecPath.Whitespace>

  /**
   * Z-order.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  export type Z = StyleProp<NumberString> | StyleProp<ThemeSpecPath.Z, 'themed'>
}

export default StylePropType
