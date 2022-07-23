/**
 * @file Custom Loader
 * @module loader
 * @see https://github.com/TypeStrong/ts-node/issues/1007
 * @see https://nodejs.org/docs/latest-v16.x/api/all.html#all_esm_loaders
 */

import { createRequire } from 'node:module'
import path from 'node:path'

/**
 * @type {NodeJS.Require}
 * @const r - Node.js `require` function
 */
const r = createRequire(import.meta.url)

/**
 * @type {import('ts-node').NodeLoaderHooksAPI2 | undefined}
 * @var hooks - `ts-node` loader hooks
 */
let hooks

try {
  const { createEsmHooks, register } = await import('ts-node')
  hooks = createEsmHooks(register())
} catch (e) {
  console.error(`[loader] ${e.message}`)
}

/**
 * Determines how `url` should be interpreted, retrieved, and parsed.
 *
 * @see https://nodejs.org/docs/latest-v16.x/api/all.html#all_esm_loadurl-context-defaultload
 *
 * @async
 *
 * @param {string} url - `file:` url of module
 * @param {LoadHookContext} context - Hook context
 * @param {(LoaderHookFormat | null)?} [context.format] - Module format
 * @param {ImportAssertions} context.importAssertions - Import assertions map
 * @param {LoadHook} defaultLoad - Default Node.js `load` function
 * @return {Promise<LoadHookResult>} Hook result
 */
export const load = async (url, context, defaultLoad) => {
  // support for extensionless files in "bin" scripts
  // https://github.com/nodejs/modules/issues/488#issuecomment-804895142
  if (/^file:\/{3}.*\/bin\//.test(url) && !path.extname(url)) {
    context.format = 'commonjs'
  }

  return hooks
    ? hooks.load(url, context, defaultLoad)
    : defaultLoad(url, context, defaultLoad)
}

/**
 * Returns the resolved file URL for `specifier` and `context.parentURL` and,
 * optionally, its format as a hint to {@link load}.
 *
 * **Note**: Path aliases found in tsconfig(s) are respected during resolution.
 *
 * @see https://nodejs.org/docs/latest-v16.x/api/all.html#all_esm_resolvespecifier-context-defaultresolve
 *
 * @async
 *
 * @param {string} specifier - Module specifier
 * @param {ResolveHookContext} context - Hook context
 * @param {string[]} context.conditions - Import conditions
 * @param {ImportAssertions} context.importAssertions - Import assertions map
 * @param {string} [context.parentURL] - `file:` url of importer
 * @param {ResolveHook} defaultResolve - Node.js default resolver
 * @return {Promise<ResolveHookResult>} Hook result
 * @throws {Error}
 */
export const resolve = async (specifier, context, defaultResolve) => {
  /**
   * @type {import('tsconfig-paths/lib/config-loader').configLoader?}
   * @var configLoader - `tsconfig-paths` config loader function
   */
  let configLoader

  /**
   * @type {import('tsconfig-paths/lib/match-path-sync').createMatchPath?}
   * @var createMatchPath - `tsconfig-paths` match path function generator
   */
  let createMatchPath

  /**
   * @type {import('tsconfig/dist/tsconfig').load?}
   * @var loadtsconfig - Tsconfig file loader
   */
  let loadtsconfig

  try {
    configLoader = r('tsconfig-paths/lib/config-loader').configLoader
  } catch (e) {
    console.error(`[loader] [resolve] ${e.message}`)
  }

  try {
    createMatchPath = r('tsconfig-paths/lib/match-path-sync').createMatchPath
  } catch (e) {
    console.error(`[loader] [resolve] ${e.message}`)
  }

  try {
    loadtsconfig = r('tsconfig/dist/tsconfig').load
  } catch (e) {
    console.error(`[loader] [resolve] ${e.message}`)
  }

  if (configLoader && createMatchPath && loadtsconfig) {
    /**
     * @type {string}
     * @const PWD - Path to root project directory
     */
    const PWD = path.resolve('.')

    /**
     * @type {string}
     * @const TS_NODE_PROJECT - Tsconfig file name or path
     */
    const TS_NODE_PROJECT = process.env.TS_NODE_PROJECT ?? 'tsconfig.json'

    /**
     * @type {import('tsconfig.json')}
     * @const tsconfig - Base tsconfig
     */
    const tsconfig = (await loadtsconfig(PWD)).config

    /**
     * @type {import('tsconfig.json')}
     * @const tsconfig2 - Secondary tsconfig
     */
    const tsconfig2 = (await loadtsconfig(PWD, TS_NODE_PROJECT)).config

    /**
     * @type {import('tsconfig-paths').ConfigLoaderResult}
     * @const result - `tsconfig-paths` config loader result
     */
    const result = configLoader({
      cwd: PWD,
      explicitParams: {
        addMatchAll: true,
        baseUrl: PWD,
        mainFields: ['module', 'main'],
        paths: {
          ...tsconfig.compilerOptions.paths,
          ...tsconfig2.compilerOptions.paths
        }
      }
    })

    if (result.resultType === 'failed') throw new Error(result.message)

    specifier =
      createMatchPath(
        result.absoluteBaseUrl,
        result.paths,
        result.mainFields,
        result.addMatchAll
      )(specifier) ?? specifier
  }

  return hooks
    ? hooks.resolve(specifier, context, defaultResolve)
    : defaultResolve(specifier, context, defaultResolve)
}
