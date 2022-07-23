/**
 * @file Test Setup - htmlmin
 * @module tests/setup/globals/htmlmin
 * @see https://github.com/kangax/html-minifier
 */

import { minify, type Options } from 'html-minifier'

/**
 * HTML minifier.
 *
 * @param {string} text - HTML to minify
 * @param {Options} [options={collapseWhitespace:true}] - Minify options
 * @return {string} Minified `text`
 */
const htmlmin = (text: string, options: Options = {}): string => {
  if (options.collapseWhitespace === undefined) {
    options.collapseWhitespace = true
  }

  return minify(text, options)
}

global.htmlmin = htmlmin
