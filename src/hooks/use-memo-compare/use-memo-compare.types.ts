/**
 * @file Type Definitions - useMemoCompare
 * @module hooks/useMemoCompare/types
 */

import type { ANY } from '@flex-development/tutils'

/**
 * Function that compares two values and returns a boolean indicating equality.
 *
 * @template T - Data type
 */
export type CompareFn<T = ANY> = (v1: T, v2: T) => boolean

/**
 * Next value to compare or a function that returns the next value to compare.
 *
 * @template T - Data type
 */
export type NextValue<T = ANY> = T | (() => T)
