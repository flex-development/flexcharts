/**
 * @file Type Definitions - ThemedProps
 * @module types/ThemedProps
 */

import type { ObjectPlain } from '@flex-development/tutils'
import type { ThemeSpec } from 'src/interfaces'
import type { ThemedStyledProps } from 'styled-components/macro'

/**
 * Props passed to component `style` functions.
 *
 * @template P - Component props
 * @template T - Theme specification
 */
type ThemedProps<
  P extends ObjectPlain = ObjectPlain,
  T extends ThemeSpec = ThemeSpec
> = ThemedStyledProps<P, T>

export default ThemedProps
