/**
 * @file Storybook Plugins - Docgen
 * @module storybook/plugins/docgen/plugin
 */

import MagicString from 'magic-string'
import micromatch from 'micromatch'
import path from 'node:path'
import {
  withCustomConfig,
  type ComponentDoc,
  type FileParser
} from 'react-docgen-typescript'
import type { TransformResult } from 'rollup'
import dedent from 'ts-dedent'
import type { Plugin } from 'vite'
import { PLUGIN_NAME } from './constants'
import type Options from './options.interface'

/**
 * Creates a `react-docgen-typescript` plugin.
 *
 * @see https://github.com/styleguidist/react-docgen-typescript
 * @see https://vitejs.dev/guide/api-plugin.html
 *
 * @param {Options} [options] - Plugin options
 * @return {Plugin} Vite `react-docgen-typescript` plugin
 */
const docgen = ({
  apply,
  componentNameResolver,
  enforce = 'pre',
  customComponentTypes = [],
  exclude = ['**.stories.tsx'],
  handler = doc => doc,
  include = ['**.tsx'],
  name = doc => doc.displayName,
  propFilter = prop => !prop.parent?.fileName.includes('node_modules'),
  savePropValueAsString = false,
  shouldExtractLiteralValuesFromEnum = false,
  shouldExtractValuesFromUnion = false,
  shouldIncludeExpression = false,
  shouldIncludePropTagMap = true,
  shouldRemoveUndefinedFromOptional = true,
  skipChildrenPropWithoutDoc = true,
  tsconfigPath = path.resolve('tsconfig.json')
}: Options = {}): Plugin => {
  /**
   * Component docgen info parser.
   *
   * @see https://github.com/styleguidist/react-docgen-typescript#usage
   *
   * @const {FileParser} parser
   */
  const parser: FileParser = withCustomConfig(tsconfigPath, {
    componentNameResolver,
    customComponentTypes,
    propFilter,
    savePropValueAsString,
    shouldExtractLiteralValuesFromEnum,
    shouldExtractValuesFromUnion,
    shouldIncludeExpression,
    shouldIncludePropTagMap,
    shouldRemoveUndefinedFromOptional,
    skipChildrenPropWithoutDoc
  })

  return {
    apply,
    enforce,
    name: PLUGIN_NAME,
    /**
     * Parses component docgen info from `id`.
     *
     * The final transform result will include a new source map and updated
     * version of `code` that includes a code block to attach a `__docgenInfo`
     * property to the component exported from `id`.
     *
     * If `id` isn't explicity included via {@link include}, or is explicity
     * excluded from transformation via {@link exclude}, `undefined` will be
     * returned instead.
     *
     * @param {string} code - Source code
     * @param {string} id - Module id
     * @return {Exclude<TransformResult, string>} Transformation result
     */
    transform(code: string, id: string): Exclude<TransformResult, string> {
      // do nothing if file isn't explicity omitted
      if (!micromatch.isMatch(id, include)) return

      // do nothing if file is explicity omitted
      if (micromatch.isMatch(id, exclude)) return

      try {
        /**
         * Component docgen info.
         *
         * @see https://github.com/styleguidist/react-docgen-typescript/blob/v2.2.2/src/parser.ts#L16
         *
         * @var {ComponentDoc?} doc
         */
        let doc: ComponentDoc | undefined = parser.parse(id).pop()

        // bail if missing component docgen info
        if (!doc) return null

        /**
         * {@link code} as `MagicString`.
         *
         * @see https://github.com/Rich-Harris/magic-string
         *
         * @const {MagicString} src
         */
        const src: MagicString = new MagicString(code)

        // apply additional transformations to component docgen info
        doc = handler(doc, id, code)

        /**
         * Code block containing logic to attach a `__docgenInfo` property to
         * the component found in {@link code}.
         *
         * @const {string} docgenblock
         */
        const docgenblock: string = dedent`
          try {
            ${name(doc, id, code)}.__docgenInfo=${JSON.stringify(doc)};
          } catch (e) {
            console.error('[${PLUGIN_NAME}]' + ' ' + e.message, e)
          }
        `

        // add __docgenInfo code block to source code
        src.append(docgenblock)

        return {
          code: src.toString(),
          map: src.generateMap({ hires: true, source: id })
        }
      } catch (e: unknown) {
        return void console.error(e instanceof Error ? e.message : e)
      }
    }
  }
}

export default docgen
