/**
 * @file Type Definitions - Props
 * @module types/Props
 */

import type { ObjectPlain } from '@flex-development/tutils'
import type { ComponentType } from 'react'
import type { HTMLElements, ThemedProps, TransientProps } from 'src/interfaces'
import type Attributes from './attributes'

/**
 * Base component props.
 *
 * @template T - Tag name (e.g: `button`, `div`, `rect`)
 */
type Props<T extends keyof HTMLElements = keyof HTMLElements> = Attributes<T> &
  Partial<ThemedProps> &
  TransientProps & {
    /**
     * Render component as a different HTML element or component.
     *
     * @see https://styled-components.com/docs/api#as-polymorphic-prop
     */
    as?: ComponentType<ObjectPlain> | keyof HTMLElements

    /**
     * "If you choose to wrap another component with the `styled()` HOC that
     * also accepts an `as` prop, use `forwardedAs` to pass along the desired
     * prop to the wrapped component."
     *
     * \- https://styled-components.com/docs/api#forwardedas-prop
     */
    forwardedAs?: ComponentType<ObjectPlain> | keyof HTMLElements
  }

export default Props
