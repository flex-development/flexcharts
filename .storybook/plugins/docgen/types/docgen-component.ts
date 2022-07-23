/**
 * @file Storybook Plugin Types - DocgenComponent
 * @module storybook/plugins/docgen/types/DocgenComponent
 */

import { ObjectPlain } from '@flex-development/tutils'
import type { ComponentType, PropsWithChildren } from 'react'
import type { ComponentDoc } from 'react-docgen-typescript'

/**
 * Component with docgen info.
 *
 * @template P - Component props
 */
type DocgenComponent<P extends ObjectPlain = ObjectPlain> = ComponentType<
  PropsWithChildren<P>
> & {
  /**
   * Docgen info.
   *
   * @see https://github.com/styleguidist/react-docgen-typescript
   */
  __docgenInfo: ComponentDoc
}

export type { DocgenComponent as default }
