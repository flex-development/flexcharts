/**
 * @file Type Definitions - AttributesFn
 * @module types/Attrs
 */

import type { ObjectPlain } from '@flex-development/tutils'
import type { HTMLElements } from 'src/interfaces'
import type Attributes from './attributes'
import type ThemedProps from './themed-props'

/**
 * Applies additional attributes to a component.
 *
 * @see https://styled-components.com/docs/basics#attaching-additional-props
 * @see https://styled-components.com/docs/faqs#when-to-use-attrs
 *
 * @template P - Component props
 * @template T - Tag name (e.g: `button`, `div`, `rect`)
 *
 * @param {ThemedProps<P>} props - Component props
 * @return {Attributes<T>} Component attributes
 */
type AttributesFn<
  P extends ObjectPlain = ObjectPlain,
  T extends keyof HTMLElements = keyof HTMLElements
> = (props: ThemedProps<P>) => Attributes<T>

export default AttributesFn
