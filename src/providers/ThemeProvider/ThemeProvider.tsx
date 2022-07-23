/**
 * @file Providers - ThemeProvider
 * @module providers/ThemeProvider/impl
 */

import type { FC, ReactNode } from 'react'
import type { ThemeSpec } from 'src/interfaces'
import { ThemeProvider as Provider } from 'styled-components/macro'
import GlobalStyle from 'styles/base/global'
import theme from 'styles/theme'
import type Props from './ThemeProvider.props'

/**
 * Establishes global styles and injects the theme into all styled components
 * anywhere beneath it in the component it via the [Context API][1].
 *
 * [1]: https://reactjs.org/docs/context.html
 *
 * @param {Props} props - Component props
 * @param {ReactNode} [props.children] - `ThemeContext` consumers
 * @param {ThemeSpec} [props.theme] - Theme specification
 * @return {JSX.Element} Provider-wrapped `props.children`
 */
const ThemeProvider: FC<Props> = (props: Props): JSX.Element => (
  <Provider theme={props.theme!}>
    <>
      <GlobalStyle />
      {props.children}
    </>
  </Provider>
)

ThemeProvider.displayName = 'ThemeProvider'

ThemeProvider.defaultProps = {
  theme: theme
}

export default ThemeProvider
