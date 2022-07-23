/**
 * @file Storybook Plugins - Vitest
 * @module storybook/plugins/vitest/plugin
 */

import ci from 'is-ci'
import type { Plugin, UserConfig as Overrides } from 'vite'
import { PLUGIN_NAME } from './constants'
import type Options from './options.interface'

/**
 * Creates a Vitest plugin.
 *
 * @see https://vitest.dev
 * @see https://vitejs.dev/guide/api-plugin.html
 *
 * @param {Options} [options={}] - Plugin options
 * @param {Overrides} [overrides={}] - Vite overrides
 * @param {string[]} [filters={}] - Vitest cli filters
 * @return {Plugin} Vite Vitest plugin
 */
const vitest = (
  options: Options = {},
  overrides: Overrides = {},
  filters: string[] = []
): Plugin => {
  const { apply = 'serve', enforce = 'pre', ...opts } = options

  return {
    apply,
    /**
     * Runs tests using Vitest. A test report file will be generated and
     * consumed by [`@storybook/addon-jest`][1].
     *
     * [1]: https://storybook.js.org/addons/@storybook/addon-jest
     *
     * @see https://vitest.dev/config
     *
     * @return {Promise<void>} Nothing when complete
     */
    async configResolved(): Promise<void> {
      if (ci) return void false

      const { startVitest } = await import('vitest/node')

      return void (await startVitest(
        filters,
        opts as Parameters<typeof startVitest>[1],
        overrides
      ))
    },
    enforce,
    name: PLUGIN_NAME
  }
}

export default vitest
