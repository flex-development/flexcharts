/**
 * @file Type Definitions - GSC
 * @module types/GSC
 */

import type { ThemedProps } from 'src/interfaces'
import type {
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components/macro'

/**
 * {@link GlobalStyleComponent} alias.
 */
type GSC = GlobalStyleComponent<ThemedProps, DefaultTheme>

export default GSC
