/**
 * @file Test Environment Decorators - withTheme
 * @module tests/decorators/withTheme
 */

import ThemeProvider from 'providers/ThemeProvider/ThemeProvider'
import type { ReactNode } from 'react'
import theme from 'styles/theme'

/**
 * Wraps `consumer` in a {@link ThemeProvider}.
 *
 * @see https://styled-components.com/docs/api#themeprovider
 *
 * @param {ReactNode} consumer - Theme consumer
 * @return {JSX.Element} `consumer` wrapped in `ThemeProvider`
 */
const withTheme = (consumer: ReactNode): JSX.Element => {
  return <ThemeProvider theme={theme}>{consumer}</ThemeProvider>
}

export default withTheme
