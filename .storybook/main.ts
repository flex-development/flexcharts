/**
 * @file Storybook Main
 * @module storybook/main
 * @see https://storybook.js.org/docs/react/configure/overview
 */

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { AppEnv } from '@flex-development/tutils'
import type { StorybookViteConfig } from '@storybook/builder-vite'
import type { Options } from '@storybook/core-common'
import path from 'node:path'
import type { PropItem } from 'react-docgen-typescript'
import NodePolyfill from 'rollup-plugin-node-polyfills'
import * as vite from 'vite'
import vitecommon from '../.vite.config.common'
import { docgen } from './plugins/docgen'
import { vitest } from './plugins/vitest'

/** @const {StorybookViteConfig} config - Storybook configuration */
const config: StorybookViteConfig = {
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {},
        configureJSX: true,
        sourceLoaderOptions: null,
        transcludeMarkdown: true
      }
    },
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',
    '@storybook/addon-a11y',
    'storybook-mobile'
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableProjectJson: false,
    disableTelemetry: true
  },
  features: {
    argTypeTargetsV7: true,
    babelModeV7: true,
    breakingChangesV7: true,
    buildStoriesJson: true,
    interactionsDebugger: true,
    modernInlineRender: true,
    previewMdx2: true,
    storyStoreV7: false,
    warnOnLegacyHierarchySeparator: true
  },
  framework: {
    name: '@storybook/react',
    options: { fastRefresh: true }
  },
  logLevel: 'debug',
  refs: {},
  staticDirs: [path.resolve('public')],
  stories: [
    '../src/index.stories.mdx',
    '../src/blocks/*.stories.mdx',
    '../src/components/**/**/*.stories.@(mdx|tsx)'
  ],
  typescript: {
    check: false,
    reactDocgen: false
  },
  /**
   * Alters the native Vite configuration.
   *
   * @async
   *
   * @param {vite.InlineConfig} config - Storybook Vite configuration
   * @param {Options} options - Storybook builder, CLI, and loader options
   * @return {vite.InlineConfig} Vite configuration options
   * @throws {Error}
   */
  viteFinal(config: vite.InlineConfig, options: Options): vite.InlineConfig {
    /** @const {vite.ConfigEnv} env - Vite environment context */
    const env: vite.ConfigEnv = {
      command: options.configType === 'PRODUCTION' ? 'build' : 'serve',
      mode: options.configType?.toLowerCase() ?? AppEnv.DEV
    }

    // merge storybook config with common vite config
    config = vite.mergeConfig(config, vitecommon(env))

    // remove react-docgen-typescript plugin provided by @storybook/builder-vite
    config.plugins = config.plugins!.filter(plugin => {
      return (plugin as vite.Plugin).name !== 'vite:react-docgen-typescript'
    })

    // add development and production options
    config = vite.mergeConfig(config, {
      optimizeDeps: {
        esbuildOptions: {
          plugins: [NodeGlobalsPolyfillPlugin({ process: true })]
        }
      },
      plugins: [
        docgen({
          exclude: ['**/*.attrs.tsx', '**/*.stories.tsx'],
          include: ['**/components/**/*.tsx'],
          /**
           * Omits props from documentation generation.
           *
           * @param {PropItem} prop - Component prop data
           * @return {boolean} `false` for omitted prop, `true` otherwise
           */
          propFilter(prop: PropItem): boolean {
            /** @const {boolean} keep - Omit prop check */
            let keep: boolean = true

            if (prop.parent?.fileName.includes('@types/react')) {
              // hide handlers unless explicitly defined by a story
              if (/^on[A-Z].*/.test(prop.name)) keep = false
            }

            return keep
          },
          skipChildrenPropWithoutDoc: false,
          tsconfigPath: path.resolve('tsconfig.docgen.json')
        })
      ],
      resolve: {
        alias: {
          console: 'rollup-plugin-node-polyfills/polyfills/console',
          path: 'rollup-plugin-node-polyfills/polyfills/path',
          src: path.resolve('src'),
          storybook: path.resolve('.storybook')
        }
      }
    } as vite.InlineConfig)

    // add development-only config options
    if (options.configType === 'DEVELOPMENT') {
      config = vite.mergeConfig(config, {
        plugins: [
          !(JSON.parse(process.env.SKIP_TESTS ?? '0') as boolean) &&
            vitest({
              forceRerunTriggers: [
                '**/vite.config.*/**',
                '**/vitest.config.*/**'
              ],
              // run: true, /* throws "close timed out after 1000ms" */
              watchExclude: [
                '**/.storybook/**',
                '**/node_modules/**',
                '**/src/**'
              ]
            })
        ]
      } as vite.InlineConfig)
    }

    // add production-only config options
    if (options.configType === 'PRODUCTION') {
      config = vite.mergeConfig(config, {
        build: {
          /**
           * ! DO NOT CLEAN OUTPUT DIRECTORY BEFORE RUNNING VITE BUILD.
           * ! Storybook has already added assets in there.
           */
          emptyOutDir: false,
          // https://github.com/storybookjs/builder-vite/issues/409
          minify: false,
          outDir: options.outputDir,
          rollupOptions: {
            plugins: [NodePolyfill()]
          },
          sourcemap: true
        }
      } as vite.InlineConfig)
    }

    return config
  }
}

export default config
