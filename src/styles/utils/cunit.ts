/**
 * @file Style Utilities - CUnit
 * @module styles/utils/CUnit
 */

import type { NumberString } from '@flex-development/tutils'
import em from 'polished/lib/helpers/em'
import rem from 'polished/lib/helpers/rem'
import stripUnit from 'polished/lib/helpers/stripUnit'
import CSSUnit from 'src/enums/css-unit'
import type CSSUnitValue from 'src/namespaces/css-unit-value'

/**
 * [CSS unit][1] helper.
 *
 * [1]: https://www.w3schools.com/cssref/css_units.asp
 */
class CUnit {
  /**
   * Returns the default base font size used in helper methods.
   *
   * @public
   * @static
   *
   * @return {number} Default base font size
   */
  public static get BASE(): number {
    return 16
  }

  /**
   * Converts `value` into ems.
   *
   * @see {@link CSSUnitValue.em}
   *
   * @public
   * @static
   *
   * @param {CSSUnitValue.unit | number} [value=0] - Value to convert
   * @param {CSSUnitValue.px | number} [base=CUnit.BASE] - Base pixel size
   * @return {CSSUnitValue.em} `value` in ems
   */
  public static em(
    value: CSSUnitValue.unit | number = 0,
    base: CSSUnitValue.px | number = CUnit.BASE
  ): CSSUnitValue.em {
    // rem value? replace unit
    if (this.rems(value)) return `${this.unitless(value)}${CSSUnit.EM}`

    // already in ems? return
    if (this.ems(value)) return value

    // percentage value or raw number? convert to pixel value first
    if (this.percent(value) || typeof value === 'number') {
      value = this.px(value, base)
    }

    return em(value, base)
  }

  /**
   * Checks if `value` is in ems.
   *
   * @see {@link CSSUnitValue.em}
   *
   * @public
   * @static
   *
   * @param {unknown} [value] - Value to check
   * @return {boolean} `true` if `value` is in ems, `false` otherwise
   */
  public static ems(value?: unknown): value is CSSUnitValue.em {
    return typeof value === 'string' && value.endsWith(CSSUnit.EM)
  }

  /**
   * Checks if `value` is a percentage value.
   *
   * @see {@link CSSUnitValue.percentage}
   *
   * @public
   * @static
   *
   * @param {unknown} [value] - Value to check
   * @return {boolean} `true` if `value` is percentage, `false` otherwise
   */
  public static percent(value?: unknown): value is CSSUnitValue.percentage {
    return typeof value === 'string' && value.endsWith(CSSUnit.PERCENT)
  }

  /**
   * Converts `value` into a percentage.
   *
   * @see {@link CSSUnitValue.percentage}
   *
   * @public
   * @static
   *
   * @param {CSSUnitValue.unit | number} [value=0] - Value to convert
   * @param {CSSUnitValue.px | number} [base=CUnit.BASE] - Base pixel size
   * @return {CSSUnitValue.percentage} `value` as percentage
   */
  public static percentage(
    value: CSSUnitValue.unit | number = 0,
    base: CSSUnitValue.px | number = CUnit.BASE
  ): CSSUnitValue.percentage {
    // already a percentage value? return
    if (this.percent(value)) return value

    // rems, ems, or raw number? convert to pixel value first
    if (this.rems(value) || this.ems(value) || typeof value === 'number') {
      value = this.px(value, base)
    }

    // remove units
    value = this.unitless(value)
    base = this.pixels(base) ? this.unitless(base) : base

    return `${(value * 100) / base}${CSSUnit.PERCENT}`
  }

  /**
   * Checks if `value` is a pixel value.
   *
   * @see {@link CSSUnitValue.px}
   *
   * @public
   * @static
   *
   * @param {unknown} [value] - Value to check
   * @return {boolean} `true` if `value` is in pixels, `false` otherwise
   */
  public static pixels(value?: unknown): value is CSSUnitValue.px {
    return typeof value === 'string' && value.endsWith(CSSUnit.PX)
  }

  /**
   * Converts `value` into pixels.
   *
   * @see {@link CSSUnitValue.px}
   *
   * @public
   * @static
   *
   * @param {CSSUnitValue.unit | number} [value=0] - Value to convert
   * @param {CSSUnitValue.px | number} [base=CUnit.BASE] - Base pixel size
   * @return {CSSUnitValue.px} `value` in pixels
   */
  public static px(
    value: CSSUnitValue.unit | number = 0,
    base: CSSUnitValue.px | number = CUnit.BASE
  ): CSSUnitValue.px {
    // already in pixels? return
    if (this.pixels(value)) return value

    // raw number? add unit
    if (typeof value === 'number') return `${value}${CSSUnit.PX}`

    /** @const {number} unitless - {@link value} without {@link unit} */
    const unitless: number = this.unitless(value)

    // normalize base
    base = this.pixels(base) ? this.unitless(base) : base

    // rem or em value? multiply unitless value by base and add unit
    if (this.rems(value) || this.ems(value)) {
      return `${base * unitless}${CSSUnit.PX}`
    }

    return `${(unitless * base) / 100}${CSSUnit.PX}`
  }

  /**
   * Converts `value` into rems.
   *
   * @see {@link CSSUnitValue.rem}
   *
   * @public
   * @static
   *
   * @param {CSSUnitValue.unit | number} [value=0] - Value to convert
   * @param {CSSUnitValue.px | number} [base=CUnit.BASE] - Base pixel size
   * @return {CSSUnitValue.rem} `value` in rems
   */
  public static rem(
    value: CSSUnitValue.unit | number = 0,
    base: CSSUnitValue.px | number = CUnit.BASE
  ): CSSUnitValue.rem {
    // already in rems? return
    if (this.rems(value)) return value

    // em value? replace unit
    if (this.ems(value)) return `${this.unitless(value)}${CSSUnit.REM}`

    // percentage value or raw number? convert to pixel value first
    if (this.percent(value) || typeof value === 'number') {
      value = this.px(value, base)
    }

    return rem(value, base)
  }

  /**
   * Checks if `value` is in rems.
   *
   * @see {@link CSSUnitValue.rem}
   *
   * @public
   * @static
   *
   * @param {unknown} [value] - Value to check
   * @return {boolean} `true` if `value` is in rems, `false` otherwise
   */
  public static rems(value?: unknown): value is CSSUnitValue.rem {
    return typeof value === 'string' && value.endsWith(CSSUnit.REM)
  }

  /**
   * Removes the unit from `value`.
   *
   * @public
   * @static
   *
   * @param {NumberString} value - Value to remove unit from
   * @return {number} Unitless `value`
   */
  public static unitless(value: NumberString): number {
    return +stripUnit(value)
  }
}

export default CUnit
