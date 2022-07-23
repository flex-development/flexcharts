/**
 * @file Vite Configuration - Common
 * @see https://vitejs.dev/config
 */

import { AppEnv } from '@flex-development/tutils'
import ts from '@rollup/plugin-typescript'
import legacy from '@vitejs/plugin-legacy'
import ci from 'is-ci'
import path from 'node:path'
import type { ConfigEnv, InlineConfig } from 'vite'
import macros from 'vite-plugin-babel-macros'
import inspect from 'vite-plugin-inspect'
import tsconfigpaths from 'vite-tsconfig-paths'

/**
 * Creates a {@link InlineConfig} object.
 *
 * @param {ConfigEnv} env - Environment context
 * @param {'build' | 'serve'} [env.command='build'] - Vite command
 * @param {AppEnv} [env.mode=process.env.APP_ENV ?? AppEnv.DEV] - Vite run mode
 * @return {InlineConfig} Vite configuration options
 */
const config = ({
  command = 'build',
  mode = process.env.APP_ENV ?? AppEnv.DEV
}: ConfigEnv): InlineConfig => {
  /**
   * Check for staging or production environment (with build enabled).
   *
   * @const {boolean} PRODLIKE
   */
  const PRODLIKE: boolean =
    command === 'build' && (mode === AppEnv.PROD || mode === AppEnv.STG)

  /**
   * Path to tsconfig file.
   *
   * @const {string} TSCONFIG_PATH
   */
  const TSCONFIG_PATH: string = PRODLIKE
    ? path.resolve('tsconfig.vite.prod.json')
    : path.resolve('tsconfig.vite.json')

  return {
    build: {
      dynamicImportVarsOptions: { warnOnError: true },
      manifest: true,
      minify: PRODLIKE,
      rollupOptions: { plugins: [ts({ tsconfig: TSCONFIG_PATH })] },
      target: 'esnext'
    },
    clearScreen: false,
    define: {
      'import.meta.env.CI': ci,
      'import.meta.env.VITE_ROOT': JSON.stringify(process.cwd())
    },
    envDir: process.cwd(),
    esbuild: {
      jsxInject: "import React from 'react'"
    },
    logLevel: 'error',
    mode,
    optimizeDeps: {
      exclude: [],
      include: [
        'fast-clean',
        'polished',
        'react',
        'react-dom/client',
        'react/jsx-dev-runtime',
        'react/jsx-runtime',
        'styled-components',
        'styled-system'
      ]
    },
    plugins: [
      macros(),
      tsconfigpaths({ projects: [TSCONFIG_PATH] }),
      ...(PRODLIKE ? [legacy()] : [inspect()])
    ],
    publicDir: path.resolve('public'),
    resolve: {
      extensions: ['.cjs', '.cts', '.mjs', '.js', '.jsx', '.ts', '.tsx']
    }
  }
}

export default config
