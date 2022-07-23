/**
 * @file Enums - InputMode
 * @module enums/InputMode
 */

/**
 * Provides a hint to browsers as to the type of virtual keyboard configuration
 * to use when editing this component or its contents.
 *
 * Used primarily on `Input` components, but is usable on any component while
 * with `contentEditable` enabled.
 *
 * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 *
 * @enum {string}
 */
enum InputMode {
  decimal = 'decimal',
  email = 'email',
  none = 'none',
  numeric = 'numeric',
  search = 'search',
  tel = 'tel',
  text = 'text',
  url = 'url'
}

export default InputMode
