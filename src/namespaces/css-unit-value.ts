/**
 * @file Namespaces - CSSUnitValue
 * @module namespaces/CSSUnitValue
 */

/**
 * [CSS unit][1] value types.
 *
 * [1]: https://w3schools.com/cssref/css_units.asp
 */
namespace CSSUnitValue {
  /**
   * `em` value.
   *
   * `em` units are relative to the font-size of the element (`2em` means 2
   * times the size of the current font).
   */
  export type em = `${number}em`

  /**
   * `percentage` value.
   */
  export type percentage = `${number}%`

  /**
   * `px` value.
   *
   * `px` units are relative to the viewing device. For low-dpi devices, `1px`
   * is one device pixel (dot) of the display. For printers and high resolution
   * screens `1px` implies multiple device pixels.
   */
  export type px = `${number}px`

  /**
   * `rem` value.
   *
   * `rem` units are relative to font-size of the root element.
   */
  export type rem = `${number}rem`

  /**
   * Value type union.
   */
  export type unit = em | percentage | px | rem
}

export default CSSUnitValue
