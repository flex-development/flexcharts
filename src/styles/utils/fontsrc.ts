/**
 * @file Style Utilities - fontsrc
 * @module styles/utils/fontsrc
 */

import { format as pf } from 'pretty-format'
import font from './font'

/**
 * Creates the [`src`][1] property of a [`@font-face`][2] rule declaration.
 *
 * [1]: https://developer.mozilla.org/docs/Web/CSS/@font-face/src
 * [2]: https://developer.mozilla.org/docs/Web/CSS/@font-face
 *
 * @param {string} file - Font filename (**without** extension)
 * @param {[string, string?][]} [sources=[]] - Extension names mapped to formats
 * @return {string} `src` property value
 */
const fontsrc = (file: string, sources: [string, string?][] = []): string => {
  /** @const {string[]} src - {@link sources} formatted */
  const src: string[] = sources.map(([ext, format]) => {
    return `${font(`${file}.${ext}`)}${format ? ` format(${pf(format)})` : ''}`
  })

  // Convert src to a string and return
  return `${src.join(',\n').trim()};`
}

export default fontsrc
