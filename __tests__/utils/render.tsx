/**
 * @file Test Utilities - render
 * @module tests/utils/render
 */

import type { RenderOptions, RenderResult } from '@testing-library/react'
import { render as renderComponent } from '@testing-library/react'
import ThemeProvider from 'providers/ThemeProvider/ThemeProvider'
import type { ReactElement } from 'react'
import theme from 'styles/theme'

/**
 * Renders `ui` wrapped in a `ThemeProvider`.
 *
 * @param {ReactElement} [ui=<>{null}</>] - Component to render
 * @param {RenderOptions} [options] - Render options
 * @return {RenderResult} Render result
 */
const render = (
  ui: ReactElement = <>{null}</>,
  options: RenderOptions = {}
): RenderResult => {
  options.legacyRoot = false

  return renderComponent(
    <ThemeProvider theme={theme}>{ui}</ThemeProvider>,
    options
  )
}

export default render
