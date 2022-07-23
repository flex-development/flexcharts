/**
 * @file Enums - BgPosition
 * @module enums/BgPosition
 */

import omit from 'lodash.omit'
import Size from './size'

/**
 * `theme.background.positions` map.
 *
 * @enum {string}
 */
const BgPosition = Object.freeze({
  ...omit(Size, ['available', 'max', 'min']),
  bottom: 'bottom',
  center: 'center',
  centercenter: 'center center',
  left: 'left',
  leftbottom: 'left bottom',
  leftcenter: 'left center',
  lefttop: 'left top',
  right: 'right',
  rightbottom: 'right bottom',
  righttop: 'right top',
  top: 'top'
} as const)

export default BgPosition
