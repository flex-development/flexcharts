/**
 * @file Storybook Plugin Options Interface - Docgen
 * @module storybook/plugins/docgen/Options
 */

import type { ComponentDoc, ParserOptions } from 'react-docgen-typescript'
import type { Plugin } from 'vite'

/**
 * Vite `react-docgen-typescript` plugin options.
 *
 * @see https://github.com/styleguidist/react-docgen-typescript
 *
 * @extends {ParserOptions}
 */
interface Options extends ParserOptions {
  /**
   * Apply the plugin only for serve or build, or on certain conditions.
   *
   * @see https://vitejs.dev/guide/api-plugin.html#conditional-application
   */
  apply?: Plugin['apply']

  /**
   * Plugin invocation tier.
   *
   * @see https://vitejs.dev/guide/api-plugin.html#plugin-ordering
   *
   * @default 'pre'
   */
  enforce?: Plugin['enforce']

  /**
   * Glob patterns to ignore.
   *
   * **Note**: Applied **after** {@link include}.
   *
   * @see https://github.com/micromatch/micromatch
   *
   * @default ['**.stories.tsx']
   */
  exclude?: string[]

  /**
   * Applies additional transformations to component docgen info before added to
   * a component as `__docgenInfo`.
   *
   * @default doc=>doc
   *
   * @param {ComponentDoc} doc - Component docgen info
   * @param {string} id - Module id
   * @param {string} code - Source code (may have Vite transforms applied)
   * @return {ComponentDoc} Augmented `doc`
   */
  handler?(doc: ComponentDoc, id: string, code: string): ComponentDoc

  /**
   * Glob patterns to include.
   *
   * @see https://github.com/micromatch/micromatch
   *
   * @default ['**.tsx']
   */
  include?: string[]

  /**
   * Returns the name of the component to add a `__docgenInfo` property to.
   *
   * @default doc=>doc.displayName
   *
   * @param {ComponentDoc} doc - Component docgen info
   * @param {string} id - Module id
   * @param {string} code - Source code (may have Vite transforms applied)
   * @return {string} Component name
   */
  name?(doc: ComponentDoc, id: string, code: string): string

  /**
   * Location of the `tsconfig.json` to use.
   *
   * @default path.resolve('tsconfig.json')
   */
  tsconfigPath?: string
}

export type { Options as default }
