/**
 * @file Enums - TextTransform
 * @module enums/TextTransform
 */

/**
 * `theme.text.transform` map.
 *
 * @enum {string}
 */
const TextTransform = Object.freeze({
  capitalize: 'capitalize',
  fullsizekana: 'full-size-kana',
  fullwidth: 'full-width',
  inherit: 'inherit',
  initial: 'initial',
  lowercase: 'lowercase',
  none: 'none',
  revert: 'revert',
  unset: 'unset',
  uppercase: 'uppercase'
} as const)

export default TextTransform
