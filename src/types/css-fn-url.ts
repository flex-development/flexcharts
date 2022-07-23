/**
 * @file Type Definitions - CSSFnUrl
 * @module types/CSSFnUrl
 */

/**
 * String representing a [CSS `url` function][1].
 *
 * [1]: https://developer.mozilla.org/docs/Web/CSS/url()
 */
type CSSFnUrl = `url('${string}')` | `url("${string}")` | `url(${string})`

export default CSSFnUrl
