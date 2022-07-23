/**
 * @file Storybook Configuration - argTypes
 * @module storybook/config/argTypes
 * @see https://storybook.js.org/docs/react/api/argtypes#manual-specification
 * @see https://storybook.js.org/docs/react/api/argtypes#global-argtypes
 */

import type { ArgTypes, InputType } from '@storybook/csf'
import { AriaRole, AutoCapitalize, EnterKeyHint, InputMode } from 'src/enums'
import type { Props } from 'src/types'
import dedent from 'ts-dedent'

/** @const {InputType} DISABLE_ARG - Settings to disable an arg type */
const DISABLE_ARG: InputType = {
  control: { type: null },
  table: { disable: true }
}

/**
 * Global Storybook argTypes.
 *
 * @const {Readonly<ArgTypes<Props<'svg'>>>} argTypes
 */
const argTypes: Readonly<ArgTypes<Props<'svg'>>> = Object.freeze({
  $css: { control: DISABLE_ARG.control },
  about: DISABLE_ARG,
  as: {
    control: { type: 'text' },
    table: {
      type: {
        summary: 'ComponentType<ObjectPlain> | keyof HTMLElements'
      }
    }
  },
  autoCapitalize: {
    control: { type: 'select' },
    mapping: AutoCapitalize,
    options: Object.keys(AutoCapitalize),
    table: { type: { summary: 'AutoCapitalize' } }
  },
  autoCorrect: DISABLE_ARG,
  autoSave: DISABLE_ARG,
  color: DISABLE_ARG,
  css: DISABLE_ARG,
  datatype: DISABLE_ARG,
  defaultChecked: DISABLE_ARG,
  defaultValue: DISABLE_ARG,
  enterKeyHint: {
    control: { type: 'select' },
    mapping: EnterKeyHint,
    options: Object.keys(EnterKeyHint),
    table: { type: { summary: 'EnterKeyHint' } }
  },
  forwardedAs: {
    control: { type: 'text' },
    table: {
      type: {
        summary: 'ComponentType<ObjectPlain> | keyof HTMLElements'
      }
    }
  },
  inlist: DISABLE_ARG,
  inputMode: {
    control: { type: 'select' },
    description: dedent`
      Hints at the type of data that might be entered by the user while editing the element or its contents, thus providing a hint to browsers as to the type of virtual keyboard configuration as well.

      Used primarily on \`Input\` components, but is usable on any component with contentEditable enabled.
    `,
    mapping: InputMode,
    options: Object.keys(InputMode),
    table: { type: { summary: 'InputMode' } }
  },
  is: {
    description: dedent`
      Specify that a standard HTML component should behave like a defined custom built-in component.
    `
  },
  itemID: DISABLE_ARG,
  itemProp: DISABLE_ARG,
  itemRef: DISABLE_ARG,
  itemScope: DISABLE_ARG,
  itemType: DISABLE_ARG,
  key: { control: DISABLE_ARG.control },
  part: DISABLE_ARG,
  placeholder: DISABLE_ARG,
  prefix: DISABLE_ARG,
  property: DISABLE_ARG,
  radioGroup: DISABLE_ARG,
  ref: { control: { type: null } },
  resource: DISABLE_ARG,
  results: DISABLE_ARG,
  role: {
    control: { type: 'select' },
    mapping: AriaRole,
    options: Object.keys(AriaRole),
    table: { type: { summary: 'AriaRole' } }
  },
  scrollLeft: DISABLE_ARG,
  scrollTop: DISABLE_ARG,
  security: DISABLE_ARG,
  slot: DISABLE_ARG,
  style: {
    description: dedent`
      [CSS][1] styling declarations to be applied to the element.

      [1]: https://developer.mozilla.org/docs/Web/CSS
    `,
    table: { type: { summary: 'CSSProperties | FluidProps<CSSProperties>' } }
  },
  theme: {
    description: 'Theme specification.',
    table: { type: { summary: 'ThemeSpec' } }
  },
  typeof: DISABLE_ARG,
  vocab: DISABLE_ARG
})

export default argTypes
