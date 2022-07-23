/**
 * @file Styles - Theme Specification
 * @module styles/theme
 * @see https://system-ui.com/theme
 */

import {
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
import type ThemeSpec from 'src/interfaces/theme-spec'
import cunit from './utils/cunit'

/** @const {Readonly<ThemeSpec>} theme - Theme specification */
const theme: Readonly<ThemeSpec> = Object.freeze({
  background: { positions: BgPosition, repeat: BgRepeat, sizes: BgSize },
  border: { radii: BorderRadius, styles: BorderStyle, widths: BorderWidth },
  breakpoints: Breakpoint,
  colors: Color,
  cunit,
  cursors: Cursor,
  display: Display,
  font: { families: FontFamily, sizes: FontSize, weights: FontWeight },
  grid: { order: GridOrder, span: GridSpan, template: GridTemplate },
  letterspacings: LetterSpacing,
  lineheights: LineHeight,
  media: MediaQuery,
  opacities: Opacity,
  overflow: Overflow,
  pointerevents: PointerEvent,
  position: Position,
  sizes: Size,
  space: Space,
  text: { align: TextAlign, transform: TextTransform },
  transitions: Transition,
  visibility: Visibility,
  whitespace: Whitespace,
  zindices: ZIndex
})

export default theme
