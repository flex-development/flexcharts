/**
 * @file Type Definitions - CSSPrimitive
 * @module types/CSSPrimitive
 */

import type { JSONPrimitive } from '@flex-development/tutils'

/**
 * Type representing any [primitive][1] [JSON value][2] that can **also** be
 * used when creating stylesheets.
 *
 * [1]: https://developer.mozilla.org/docs/Glossary/Primitive
 * [2]: https://restfulapi.net/json-data-types
 */
type CSSPrimitive = Exclude<JSONPrimitive, boolean>

export default CSSPrimitive
