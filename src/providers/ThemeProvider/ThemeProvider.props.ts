/**
 * @file ThemeProvider -  Component Props
 * @module providers/ThemeProvider/props
 */

import type { ReactNode } from 'react'
import type { ThemeSpec } from 'src/interfaces'

interface ThemeProviderProps {
  /**
   * Theme consumers.
   */
  children?: ReactNode

  /**
   * Theme specification override.
   */
  theme?: ThemeSpec
}

export default ThemeProviderProps
