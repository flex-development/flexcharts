/**
 * @file Type Definitions - BreakpointKey
 * @module types/BreakpointKey
 */

import type { Path } from '@flex-development/tutils'
import type Breakpoint from 'src/enums/breakpoint'

/**
 * {@link Breakpoint} key.
 */
type BreakpointKey = Path<typeof Breakpoint>

export default BreakpointKey
