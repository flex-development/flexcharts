/**
 * @file Utilities - attributes
 * @module utils/attributes
 */

import type { ObjectPlain } from '@flex-development/tutils'
import { clean } from 'fast-clean'
import type { HTMLElements } from 'src/interfaces'
import type { Attributes } from 'src/types'

/**
 * Creates an {@link AttrObj}.
 *
 * @template P - Component props
 * @template T - Tag name (e.g: `button`, `div`, `rect`)
 *
 * @param {P} [props={}] - Component props
 * @param {Attributes<T>} [attrs={}] - Additional attributes
 * @return {Attributes<T>} HTML attributes
 */
function attributes<
  T extends keyof HTMLElements = keyof HTMLElements,
  P extends Attributes<T> = Attributes<T>
>(
  props: P = {} as P,
  { children, ...rest }: Attributes<T> = {} as Attributes<T>
): Attributes<T> {
  return {
    ...clean({
      ...(rest as unknown as ObjectPlain),
      'aria-hidden': props.hidden ?? undefined
    }),
    children: children ?? props.children
  }
}

export default attributes
