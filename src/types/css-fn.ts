/**
 * @file Type Definitions - CSSFn
 * @module types/CSSFn
 */

import type { ObjectPlain } from '@flex-development/tutils'
import type { CSSObject } from 'styled-components/macro'

/**
 * Returns an object containing CSS properties.
 *
 * @template P - Component props
 *
 * @param {P} props - Component props
 * @return {CSSObject} CSS properties
 */
type CSSFn<P extends ObjectPlain = ObjectPlain> = (props: P) => CSSObject

export default CSSFn
