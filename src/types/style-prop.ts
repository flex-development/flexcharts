/**
 * @file Type Definitions - StyleProp
 * @module types/Prop
 */

import type { Globals } from 'csstype'
import type CSSImportant from './css-important'
import type CSSPrimitive from './css-primitive'
import type ResponsiveValue from './responsive-value'

/**
 * CSS component property type.
 *
 * @template V - Property value types
 * @template T - Mark `V` as value from theme specification
 */
type StyleProp<
  V extends CSSPrimitive = CSSPrimitive,
  T extends 'themed' | false = false
> = ResponsiveValue<
  | V
  | (T extends 'themed' ? V : `${CSSImportant<Exclude<V, null>>}`)
  | (CSSImportant<Globals> | Globals)
  | null
>

export default StyleProp
