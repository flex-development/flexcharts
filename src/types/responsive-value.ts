/**
 * @file Type Definitions - ResponsiveValue
 * @module types/ResponsiveValue
 */

import type ResponsiveValues from './responsive-values'

/**
 * Creates a union composed of value `T` and an object containing responsive
 * values.
 *
 * @see {@link ResponsiveValues}
 *
 * @template T - Value type
 */
type ResponsiveValue<T> = ResponsiveValues<T> | T

export default ResponsiveValue
