/**
 * @file Type Definitions - CSSInject
 * @module types/CSSInject
 */

import type { CSSObject } from 'styled-components/macro'
import type CSSFragment from './css-fragment'

/**
 * Injectable CSS.
 */
type CSSInject = CSSFragment | CSSObject

export default CSSInject
