/**
 * @file Style Utilities - important
 * @module styles/utils/important
 */

import type { CSSImportant, CSSPrimitive } from 'src/types'

/**
 * Adds `!important` to a CSS value.
 *
 * @param {CSSPrimitive} value - Value to add `!important` to
 * @return {CSSImportant} `value` with `!important` applied
 */
const important = (value: CSSPrimitive): CSSImportant => {
  return `${value} !important`
}

export default important
