/**
 * @file Interfaces - ThemedProps
 * @module interfaces/ThemedProps
 */

import type ThemeSpec from './theme-spec'

/**
 * Props passed to `ThemeContext` consumers.
 */
interface ThemedProps {
  /**
   * Theme specification.
   */
  theme: ThemeSpec
}

export default ThemedProps
