/**
 * @file Style Utilities - image
 * @module styles/utils/image
 */

import { CSSFnUrl } from 'src/types'
import url from './url'

/**
 * Loads an image file.
 *
 * @param {string} file - Image filename (with extension)
 * @return {CSSFnUrl} Function string
 */
const image = (file: string): CSSFnUrl => url(`img/${file}`)

export default image
