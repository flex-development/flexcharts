/**
 * @file Enums - Breakpoint
 * @module enums/Breakpoint
 */

import type CSSUnitValue from 'src/namespaces/css-unit-value'
import cunit from 'styles/utils/cunit'

/**
 * `theme.breakpoints` map.
 *
 * @enum {CSSUnitValue.em}
 */
const Breakpoint = Object.freeze({
  360: cunit.em(360),
  375: cunit.em(375),
  390: cunit.em(390),
  414: cunit.em(414),
  428: cunit.em(428),
  744: cunit.em(744),
  768: cunit.em(768),
  800: cunit.em(800),
  820: cunit.em(820),
  834: cunit.em(834),
  992: cunit.em(992),
  1024: cunit.em(1024),
  1280: cunit.em(1280),
  1366: cunit.em(1366),
  1440: cunit.em(1440),
  1536: cunit.em(1536),
  1920: cunit.em(1920)
} as const)

export default Breakpoint
