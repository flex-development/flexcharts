/**
 * @file Storybook Configuration - Preview
 * @module storybook/preview
 * @see https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 */

import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs'
import type { SBType, StrictArgTypes } from '@storybook/csf'
import {
  extractComponentDescription,
  extractComponentProps,
  type ExtractedProp
} from '@storybook/docs-tools'
import type { DecoratorFn } from '@storybook/react'
import type { Parameters } from '@storybook/store'
import ThemeProvider from 'providers/ThemeProvider/ThemeProvider'
import type { PropsWithChildren, ReactNode } from 'react'
import type { PropItem } from 'react-docgen-typescript'
import type { StringIndexedObject } from 'react-docgen-typescript/lib/parser'
import theme from 'src/styles/theme'
import dedent from 'ts-dedent'
import prettier from '../.prettierrc.json'
import { DocsPage } from './components'
import viewports from './config/viewports'
import { withConsole, withTests, withTheme } from './decorators'
import type { DocgenComponent } from './plugins/docgen/types'

/** @const {DecoratorFn[]} decorators - Global decorators */
export const decorators: DecoratorFn[] = [withConsole, withTheme, withTests]

/** @const {Parameters} parameters - Global parameters */
export const parameters: Parameters = {
  a11y: {},
  actions: {
    argTypesRegex: '^(handle|on)[A-Z].*'
  },
  backgrounds: {
    default: 'white',
    values: Object.entries(theme.colors).map(([name, value]) => ({
      name,
      value
    }))
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst'
  },
  docs: {
    /**
     * Wraps {@link DocsContainer} children in a {@link ThemeProvider}.
     *
     * @see https://github.com/storybookjs/storybook/blob/v6.5.9/addons/docs/docs/recipes.md#overwriting-docs-container
     *
     * @param {PropsWithChildren<DocsContainerProps>} props - Container props
     * @param {ReactNode} [props.children] - Container children
     * @param {DocsContainerProps['context']} props.context - Docs context
     * @return {JSX.Element} `DocsContainer` with `children` in `ThemeProvider`
     */
    container({
      children,
      context
    }: PropsWithChildren<DocsContainerProps>): JSX.Element {
      return (
        // @ts-expect-error ts(2322)
        <DocsContainer context={context}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </DocsContainer>
      )
    },
    /**
     * Generates arg types for `component`.
     *
     * @see https://storybook.js.org/docs/react/writing-stories/args
     * @see https://github.com/storybookjs/storybook/blob/v6.5.9/addons/docs/docs/props-tables.md#customizing-argtypes
     *
     * @param {DocgenComponent} component - Component with docgen info
     * @return {StrictArgTypes} `component` arg types
     */
    extractArgTypes(component: DocgenComponent): StrictArgTypes {
      /**
       * Storybook extracted {@link component} props.
       *
       * @const {ExtractedProp[]} extract - Extracted
       */
      const extract: ExtractedProp[] = extractComponentProps(component, 'props')

      /**
       * Parsed {@link component} props.
       *
       * @const {PropItem[]} props
       */
      const props: PropItem[] = Object.values(component.__docgenInfo.props)

      return props.reduce((acc: StrictArgTypes, p) => {
        const { propDef } = extract.find(ex => ex.propDef.name === p.name)!

        /**
         * Prop item tags.
         *
         * @const {StringIndexedObject<string>} tags
         */
        const tags: StringIndexedObject<string> = p.tags ?? {}

        acc[p.name] = {
          description: dedent`
            ${
              tags.deprecated
                ? dedent`
                  <sup
                    style="color:red;font-weight:700;text-transform:uppercase"
                  >
                    deprecated
                  </sup>
                  <br/>
                `
                : ''
            }
            ${p.description}
            ${((tags.see ?? '').match(/^http.+/gm) ?? [])
              .map(url => `@see **${url}**`)
              .join('<br/>')}
          `,
          name: p.name,
          table: {
            defaultValue: propDef.defaultValue,
            jsDocTags: propDef.jsDocTags,
            type: propDef.type
          },
          type: Object.assign({}, propDef.sbType as SBType, {
            raw: p.type.raw,
            required: p.required
          })
        } as StrictArgTypes[string]

        return acc
      }, {})
    },
    /**
     * Returns a description for `component`.
     *
     * If the component documentation includes `@see` tags, they'll be appended
     * to the final description.
     *
     * @param {DocgenComponent} component - Component to get description for
     * @return {string} `component` description
     */
    extractComponentDescription(component: DocgenComponent): string {
      return dedent`
        ${extractComponentDescription(component)}
        <br/>
        <br/>
        ${((component.__docgenInfo.tags?.see ?? '').match(/^http.+/gm) ?? [])
          .map(url => `**${url}**`)
          .join('<br/>')}
      `
    },
    page: DocsPage
  },
  html: {
    highlighter: { showLineNumbers: true, wrapLines: true },
    prettier,
    removeEmptyComments: true,
    root: '#root'
  },
  viewport: { viewports }
}

export { default as argTypes } from './config/arg-types'
