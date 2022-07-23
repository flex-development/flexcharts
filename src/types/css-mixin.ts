/**
 * @file Type Definitions - CSSMixin
 * @module types/CSSMixin
 */

import type { css } from 'styled-components/macro'
import type CSSInject from './css-inject'

/**
 * Function that returns injectable CSS.
 *
 * @param {Parameters<typeof css>} args - Mixin styles
 * @return {CSSInject} CSS fragment or object
 */
type CSSMixin = (...args: Parameters<typeof css>) => CSSInject

export default CSSMixin
