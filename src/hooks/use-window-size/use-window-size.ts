/**
 * @file Hooks - useWindowSize
 * @module hooks/useWindowSize
 */

import { useCallback, useEffect, useState } from 'react'
import useSSR from 'use-ssr'
import type {
  UseWindowSize,
  UseWindowSizeOptions
} from './use-window-size.types'

/**
 * Tracks `Window` dimensions.
 *
 * @param {UseWindowSizeOptions} [options] - Hook options
 * @param {number} [options.height=0] - Initial window height (SSR only)
 * @param {boolean} [options.round=true] - Round final dimensions
 * @param {number} [options.width=0] - Initial window width (SSR only)
 * @return {UseWindowSize} Window height and width
 */
const useWindowSize = ({
  height: h = 0,
  round = true,
  width: w = 0
}: UseWindowSizeOptions = {}): UseWindowSize => {
  // get browser check
  const { isBrowser: browser } = useSSR()

  // window dimensions
  const [height, setheight] = useState<number>(browser ? window.innerHeight : h)
  const [width, setwidth] = useState<number>(browser ? window.innerWidth : w)

  /**
   * Updates {@link height} and {@link width}.
   *
   * @return {void} Nothing when complete
   */
  const onResize = useCallback((): void => {
    setheight(round ? Math.round(window.innerHeight) : window.innerHeight)
    setwidth(round ? Math.round(window.innerWidth) : window.innerWidth)
  }, [round])

  // handle resize event listener
  useEffect(() => {
    if (!browser) return

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [browser, onResize])

  return { height, width }
}

export default useWindowSize
export * from './use-window-size.types'
