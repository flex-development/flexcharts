/**
 * @file Storybook Plugin Options Interface - Vitest
 * @module storybook/plugins/vitest/Options
 */

import type { Plugin } from 'vite'
import type { UserConfig } from 'vitest'

/**
 * Vitest plugin options.
 *
 * @see https://vitest.dev
 *
 * @extends {UserConfig}
 */
interface Options extends UserConfig {
  /**
   * Apply the plugin only for serve or build, or on certain conditions.
   *
   * @see https://vitejs.dev/guide/api-plugin.html#conditional-application
   *
   * @default 'serve'
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
   * Override watch mode.
   */
  run?: boolean
}

export default Options
