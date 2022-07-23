/**
 * @file Hooks - useMemoCompare
 * @module hooks/useMemoCompare
 */

import type { ANY } from '@flex-development/tutils'
import { dequal } from 'dequal'
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react'
import type { CompareFn, NextValue } from './use-memo-compare.types'

/**
 * Caches a value and returns that value if it hasn't changed.
 *
 * If `compare` returns `false`, the value of `next` will overwrite the cached
 * value and be returned. Otherwise, the cached value will be returned.
 *
 * @see https://usehooks.com/useMemoCompare
 * @see https://github.com/lukeed/dequal
 *
 * @template T - Data type
 *
 * @param {NextValue<T>} next - Next value or function that returns next value
 * @param {CompareFn<T>} [compare=dequal] - Function to compare values
 * @return {T} New or cached value
 */
function useMemoCompare<T = ANY>(
  next: NextValue<T>,
  compare: CompareFn<T> = dequal
): T {
  /** @const {T} value - Initial value */
  const value: T = typeof next === 'function' ? (next as () => T)() : next

  /** @const {MutableRefObject<T?>} cached - Cached value ref */
  const cached: MutableRefObject<T | undefined> = useRef<T>()

  /** @const {CompareFn<T>} _compare - Memoized {@link compare} */
  const _compare: CompareFn<T> = useCallback(compare, [compare])

  /** @const {boolean} equal - Equality check */
  const equal: boolean = useMemo<boolean>(() => {
    return _compare(cached.current as T, value)
  }, [_compare, value])

  // if values are not equal, overwrite cached value.
  // only update if !equal so that hook continues to return cached value if
  // _compare keeps returning true
  useEffect(() => {
    if (!equal) cached.current = value
  })

  return equal ? (cached.current as T) : value
}

export default useMemoCompare
export * from './use-memo-compare.types'
