/**
 * @file Heading - Component Props
 * @module components/atoms/Heading/props
 */

import type { Props, TagHeading } from 'src/types'

type HeadingProps = Props<TagHeading> & {
  /**
   * Type of heading element to render.
   *
   * @default 'h1'
   */
  as?: TagHeading
}

export default HeadingProps
