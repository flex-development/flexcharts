/**
 * @file Type Definitions - useWindowSize
 * @module hooks/useWindowSize/types
 */

/**
 * `useWindowSize` return type.
 */
interface UseWindowSize {
  /**
   * Window height.
   */
  height: number

  /**
   * Window width.
   */
  width: number
}

/**
 * `useWindowSize` options.
 */
interface UseWindowSizeOptions {
  /**
   * Initial window height.
   *
   * **Note**: Only respected while server-side rendering.
   *
   * @default 0
   */
  height?: number

  /**
   * Round final dimensions.
   *
   * @default true
   */
  round?: boolean

  /**
   * Initial window width.
   *
   * **Note**: Only respected while server-side rendering.
   *
   * @default 0
   */
  width?: number
}

export type { UseWindowSize, UseWindowSizeOptions }
