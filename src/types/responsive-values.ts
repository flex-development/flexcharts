/**
 * @file Type Definitions - ResponsiveValues
 * @module types/ResponsiveValues
 */

import type BreakpointKey from './breakpoint-key'

/**
 * Object containing responsive values.
 *
 * @template T - Value type
 */
type ResponsiveValues<T> = { [K in BreakpointKey | '_']?: T }

export default ResponsiveValues
