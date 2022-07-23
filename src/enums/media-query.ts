/**
 * @file Enums - MediaQuery
 * @module enums/MediaQuery
 */

import Breakpoint from './breakpoint'

/**
 * `theme.media` map.
 *
 * @enum {string}
 */
const MediaQuery = Object.freeze({
  360: `(min-width: ${Breakpoint[360]})`,
  375: `(min-width: ${Breakpoint[375]})`,
  390: `(min-width: ${Breakpoint[390]})`,
  414: `(min-width: ${Breakpoint[414]})`,
  428: `(min-width: ${Breakpoint[428]})`,
  744: `(min-width: ${Breakpoint[744]})`,
  768: `(min-width: ${Breakpoint[768]})`,
  800: `(min-width: ${Breakpoint[800]})`,
  820: `(min-width: ${Breakpoint[820]})`,
  834: `(min-width: ${Breakpoint[834]})`,
  992: `(min-width: ${Breakpoint[992]})`,
  1024: `(min-width: ${Breakpoint[1024]})`,
  1280: `(min-width: ${Breakpoint[1280]})`,
  1366: `(min-width: ${Breakpoint[1366]})`,
  1440: `(min-width: ${Breakpoint[1440]})`,
  1536: `(min-width: ${Breakpoint[1536]})`,
  1920: `(min-width: ${Breakpoint[1920]})`
} as const)

export default MediaQuery
