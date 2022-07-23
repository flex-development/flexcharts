/**
 * @file Type Definitions - CSSImportant
 * @module types/CSSImportant
 */

import type { NumberString } from '@flex-development/tutils'

/**
 * CSS value with `!important` applied.
 *
 * @see https://w3schools.com/css/css_important.asp
 */
type CSSImportant<T extends NumberString = NumberString> = `${T} !important`

export default CSSImportant
