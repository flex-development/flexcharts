/**
 * @file Gradient - Component Props
 * @module components/atoms/Gradient/props
 */

import type StopProps from 'components/Stop/Stop.props'
import type { Props, TagGradient } from 'src/types'

type GradientProps = Props<TagGradient> & {
  /**
   * Color stops.
   *
   * @default []
   */
  $stops?: StopProps[]

  /**
   * Type of gradient element to render.
   *
   * @default 'linearGradient'
   */
  as?: TagGradient
}

export default GradientProps
