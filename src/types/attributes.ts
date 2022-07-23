/**
 * @file Type Definitions - Attributes
 * @module types/Attributes
 */

import type { GlobalAttributes, HTMLElements } from 'src/interfaces'

/**
 * HTML and/or SVG element attributes.
 *
 * @template T - Tag name (e.g: `button`, `div`, `rect`)
 */
type Attributes<T extends keyof HTMLElements = keyof HTMLElements> =
  GlobalAttributes<HTMLElements[T]['element']> & HTMLElements[T]['attributes']

export default Attributes
