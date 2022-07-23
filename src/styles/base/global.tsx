/**
 * @file Styles Base - Global Style
 * @module styles/base/GlobalStyle
 * @see https://styled-components.com/docs/api#createglobalstyle
 */

import type { ThemedProps } from 'src/interfaces'
import type { GSC } from 'src/types'
import { createGlobalStyle } from 'styled-components/macro'
import fonts from './fonts'
import reset from './reset'

/** @const {GSC} GlobalStyle - Global styles */
const GlobalStyle: GSC = createGlobalStyle<ThemedProps>`
  ${reset}
  ${fonts}
`

export default GlobalStyle
