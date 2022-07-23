/**
 * @file Style Utilities - font
 * @module styles/utils/font
 */

import type { CSSFnUrl } from 'src/types'
import url from './url'

/**
 * Loads a font file.
 *
 * @param {string} file - Font filename (with extension)
 * @return {CSSFnUrl} Function string
 */
const font = (file: string): CSSFnUrl => url(`fonts/${file}`)

export default font
