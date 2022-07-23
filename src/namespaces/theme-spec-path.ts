/**
 * @file Namespaces - ThemeSpecPath
 * @module namespaces/ThemeSpecPath
 */

import type ThemeSpec from 'src/interfaces/theme-spec'

/**
 * {@link ThemeSpec} paths that can be used as component prop values.
 */
namespace ThemeSpecPath {
  export type BackgroundPosition = keyof ThemeSpec['background']['positions']
  export type BackgroundRepeat = keyof ThemeSpec['background']['repeat']
  export type BackgroundSize = keyof ThemeSpec['background']['sizes']
  export type BorderRadius = keyof ThemeSpec['border']['radii']
  export type BorderStyle = keyof ThemeSpec['border']['styles']
  export type BorderWidth = keyof ThemeSpec['border']['widths']
  export type Breakpoint = keyof ThemeSpec['breakpoints']
  export type Color = keyof ThemeSpec['colors']
  export type Cursor = keyof ThemeSpec['cursors']
  export type Display = keyof ThemeSpec['display']
  export type FontFamily = keyof ThemeSpec['font']['families']
  export type FontSize = keyof ThemeSpec['font']['sizes']
  export type FontWeight = keyof ThemeSpec['font']['weights']
  export type GridOrder = keyof ThemeSpec['grid']['order']
  export type GridSpan = keyof ThemeSpec['grid']['span']
  export type GridTemplate = keyof ThemeSpec['grid']['template']
  export type LetterSpacing = keyof ThemeSpec['letterspacings']
  export type Media = keyof ThemeSpec['media']
  export type LineHeight = keyof ThemeSpec['lineheights']
  export type Opacity = keyof ThemeSpec['opacities']
  export type Overflow = keyof ThemeSpec['overflow']
  export type PointerEvent = keyof ThemeSpec['pointerevents']
  export type Position = keyof ThemeSpec['position']
  export type Size = keyof ThemeSpec['sizes']
  export type Space = keyof ThemeSpec['space']
  export type TextAlign = keyof ThemeSpec['text']['align']
  export type TextTransform = keyof ThemeSpec['text']['transform']
  export type Transition = keyof ThemeSpec['transitions']
  export type Visibility = keyof ThemeSpec['visibility']
  export type Whitespace = keyof ThemeSpec['whitespace']
  export type Z = keyof ThemeSpec['zindices']
}

export default ThemeSpecPath
