/**
 * @file Type Definitions - CSSFragment
 * @module types/CSSFragment
 */

import type { css } from 'styled-components/macro'

/**
 * [`css`][1] return type.
 *
 * [1]: https://styled-components.com/docs/api#css
 */
type CSSFragment = ReturnType<typeof css>

export default CSSFragment
