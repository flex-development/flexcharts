/**
 * @file Interfaces - ThemeSpec
 * @module interfaces/ThemeSpec
 */

import type {
  BgPosition,
  BgRepeat,
  BgSize,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  Breakpoint,
  Color,
  Cursor,
  Display,
  FontFamily,
  FontSize,
  FontWeight,
  GridOrder,
  GridSpan,
  GridTemplate,
  LetterSpacing,
  LineHeight,
  MediaQuery,
  Opacity,
  Overflow,
  PointerEvent,
  Position,
  Size,
  Space,
  TextAlign,
  TextTransform,
  Transition,
  Visibility,
  Whitespace,
  ZIndex
} from 'src/enums'
import type cunit from 'styles/utils/cunit'

/**
 * Theme specification schema.
 *
 * @see https://styled-system.com/theme-specification#key-reference
 */
interface ThemeSpec {
  background: {
    positions: typeof BgPosition
    repeat: typeof BgRepeat
    sizes: typeof BgSize
  }
  border: {
    radii: typeof BorderRadius
    styles: typeof BorderStyle
    widths: typeof BorderWidth
  }
  breakpoints: typeof Breakpoint
  colors: typeof Color
  cunit: typeof cunit
  cursors: typeof Cursor
  display: typeof Display
  font: {
    families: typeof FontFamily
    sizes: typeof FontSize
    weights: typeof FontWeight
  }
  grid: {
    order: typeof GridOrder
    span: typeof GridSpan
    template: typeof GridTemplate
  }
  letterspacings: typeof LetterSpacing
  lineheights: typeof LineHeight
  media: typeof MediaQuery
  opacities: typeof Opacity
  overflow: typeof Overflow
  pointerevents: typeof PointerEvent
  position: typeof Position
  sizes: typeof Size
  space: typeof Space
  text: { align: typeof TextAlign; transform: typeof TextTransform }
  transitions: typeof Transition
  visibility: typeof Visibility
  whitespace: typeof Whitespace
  zindices: typeof ZIndex
}

export default ThemeSpec
