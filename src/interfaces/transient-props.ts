/**
 * @file Interfaces - TransientProps
 * @module interfaces/TransientProps
 */

import type { CSSProp } from 'styled-components/macro'
import type ThemeSpec from './theme-spec'

/**
 * Transient properties.
 *
 * @see https://styled-components.com/docs/api#transient-props
 */
interface TransientProps {
  /**
   * Additional CSS.
   */
  $css?: CSSProp<ThemeSpec>
}

export default TransientProps
