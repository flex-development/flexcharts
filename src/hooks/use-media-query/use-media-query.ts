/**
 * @file Hooks - useMediaQuery
 * @module hooks/useMediaQuery
 */

import { useCallback, useEffect, useMemo, useState } from 'react'
import useSSR from 'use-ssr'
import type { UseMediaQuery } from './use-media-query.types'

/**
 * Determines if [`document`][1] matches `query`.
 *
 * **Note**: `state` should be defined to prevent a hydration mismatches while
 * server-side rendering.
 *
 * [1]: https://developer.mozilla.org/docs/Web/API/Document
 *
 * @see https://developer.mozilla.org/docs/Web/API/Window/matchMedia
 * @see https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries
 *
 * @param {string} query - Media query
 * @param {boolean} [state] - Default media query match state
 * @return {UseMediaQuery} Media query match state
 */
const useMediaQuery = (query: string, state?: boolean): UseMediaQuery => {
  // get browser check
  const { isBrowser } = useSSR()

  // media query match state
  const [match, setmatch] = useState<boolean>(
    // check for state first to prevent hydration mismatches
    state ?? (isBrowser ? window.matchMedia(query).matches : false)
  )

  /** @const {MediaQueryList?} mql - Media query list */
  const mql: MediaQueryList | undefined = useMemo(() => {
    return isBrowser ? window.matchMedia(query) : undefined
  }, [isBrowser, query])

  /**
   * Updates {@link match}.
   *
   * @return {void} Nothing when complete
   */
  const onChange = useCallback((): void => {
    return void setmatch(!!mql!.matches)
  }, [mql])

  // update match state
  useEffect(() => {
    if (!mql) return
    setmatch(mql.matches)
  }, [mql])

  // update match state when media query results change
  useEffect(() => {
    if (!mql) return

    mql.addEventListener('change', onChange)

    return () => {
      mql.removeEventListener('change', onChange)
    }
  }, [mql, onChange])

  return match
}

export default useMediaQuery
export * from './use-media-query.types'
