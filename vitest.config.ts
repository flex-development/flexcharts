/**
 * @file Vitest Configuration
 * @see https://vitest.dev/config
 */

import { AppEnv } from '@flex-development/tutils'
import react from '@vitejs/plugin-react'
import ci from 'is-ci'
import type { ConfigEnv, InlineConfig } from 'vite'
import * as vite from 'vite'
import type { UserConfig } from 'vitest'
import GithubActionsReporter from 'vitest-github-actions-reporter'
import common from './.vite.config.common'

/**
 * Creates a {@link UserConfig} object for test environments.
 *
 * @param {ConfigEnv} env - Environment context
 * @param {'build' | 'serve'} [env.command='build'] - Vite command
 * @param {AppEnv} [env.mode] - Vite run mode
 * @return {UserConfig} Vitest configuration options
 */
const config = (env: ConfigEnv): UserConfig => {
  /** @const {InlineConfig} defaults - Common Vite configuration options */
  const defaults: InlineConfig = common(env)

  return vite.mergeConfig(defaults, {
    define: {
      'process.env.APP_ENV': JSON.stringify(AppEnv.TEST),
      'process.env.NODE_ENV': JSON.stringify(AppEnv.TEST)
    },
    mode: AppEnv.TEST,
    plugins: [react()],
    test: {
      allowOnly: !ci,
      clearMocks: true,
      coverage: {
        all: true,
        clean: true,
        exclude: [
          '**/__mocks__/**',
          '**/__tests__/**',
          '**/enums/**',
          '**/interfaces/**',
          '**/namespaces/**',
          '**/types/**',
          '**/*.constants.ts',
          '**/*.constants.tsx',
          '**/*.props.ts',
          '**/*.stories.tsx',
          '**/*.types.ts',
          '**/index.ts',
          'src/config/transient-props.ts',
          'src/styles/base/*.tsx',
          'src/styles/theme.ts'
        ],
        extension: ['.ts', '.tsx'],
        include: ['src'],
        reporter: ['json-summary', 'lcov', 'text'],
        reportsDirectory: './coverage',
        skipFull: false
      },
      environment: 'jsdom',
      globalSetup: [
        './__tests__/setup/setup.ts',
        './__tests__/setup/teardown.ts'
      ],
      globals: true,
      hookTimeout: 10 * 1000,
      include: ['**/__tests__/*.spec.{ts,tsx}'],
      isolate: true,
      /**
       * Using `--coverage` results in a `Fatal error` if `maxThreads` **and**
       * `minThreads` sn't set to `1`.
       *
       * @see https://github.com/vitest-dev/vitest/issues/1171
       */
      maxThreads: 1,
      minThreads: 1,
      mockReset: false,
      outputFile: {
        json: './__tests__/report.json'
      },
      passWithNoTests: true,
      reporters: [
        'default',
        'json',
        ci ? new GithubActionsReporter() : './__tests__/reporters/notifier.ts'
      ],
      /**
       * Stores snapshots next to test files.
       *
       * @param {string} file - Path to test file
       * @param {string} snapshot - Snapshot name
       * @return {string} Custom snapshot path
       */
      resolveSnapshotPath(file: string, snapshot: string): string {
        return file + snapshot
      },
      restoreMocks: true,
      root: process.cwd(),
      setupFiles: ['./__tests__/setup/index.ts'],
      silent: false,
      snapshotFormat: {
        printBasicPrototype: true
      },
      testTimeout: 10 * 1000
    }
  } as UserConfig)
}

export default config
