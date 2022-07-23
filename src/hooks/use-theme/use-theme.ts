/**
 * @file Hooks - useTheme
 * @module hooks/useTheme
 */

import type { Context } from 'react'
import { useContext } from 'react'
import { ThemeSpec } from 'src/interfaces'
import { ThemeContext } from 'styled-components/macro'
import theme from 'styles/theme'

/**
 * Returns the current theme specification.
 *
 * @return {ThemeSpec} Theme specification object
 */
const useTheme = (): ThemeSpec => {
  return useContext(ThemeContext as Context<ThemeSpec | undefined>) ?? theme
}

export default useTheme
