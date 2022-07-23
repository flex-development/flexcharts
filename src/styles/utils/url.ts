/**
 * @file Style Utilities - url
 * @module styles/utils/url
 */

import { format as pf } from 'pretty-format'
import type { CSSFnUrl } from 'src/types'

/**
 * Creates a [CSS `url()` function][1] call.
 *
 * **Note**: `string` will be wrapped in double quotes.
 *
 * [1]: https://developer.mozilla.org/docs/Web/CSS/url()
 *
 * @param {string} string - URL or `id` of `<svg>` element
 * @param {boolean} [escapeString=true] - Escape special characters in `string`
 * @return {CSSFnUrl} Function call
 */
const url = (string: string, escapeString: boolean = true): CSSFnUrl => {
  return `url(${pf(string, { escapeString })})`
}

export default url
