/**
 * @file Enums - AutoCapitalize
 * @module enums/AutoCapitalize
 */

/**
 * Controls whether and how text input is automatically capitalized as it is
 * entered/edited by the user. It can have the following values:
 *
 * - `off` / `none`: no capitalization applied (letters default to lowercase)
 * - `on`/ `sentences`: capitalize the first letter of each sentence
 * - `words`:  capitalize the first letter of each word
 * - `characters`: capitalize all letters
 *
 * @enum {string}
 */
enum AutoCapitalize {
  characters = 'characters',
  none = 'none',
  off = 'off',
  on = 'on',
  sentences = 'sentences',
  words = 'words'
}

export default AutoCapitalize
