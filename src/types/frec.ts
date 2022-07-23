/**
 * @file Type Definitions - FREC
 * @module types/FREC
 */

import type { ObjectPlain } from '@flex-development/tutils'
import type { ForwardRefExoticComponent } from 'react'

/**
 * {@link ForwardRefExoticComponent} alias.
 *
 * @template P - Component props
 */
type FREC<P extends ObjectPlain = ObjectPlain> = ForwardRefExoticComponent<P>

export default FREC
