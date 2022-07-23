/**
 * @file Icon - attrs
 * @module components/atoms/Icon/attrs
 */

import Line from 'components/Line/Line'
import Path from 'components/Path/Path'
import Rect from 'components/Rect/Rect'
import svg from 'components/Svg/Svg.attrs'
import type { Attributes } from 'src/types'
import type Props from './Icon.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'svg'>} Attributes object
 */
const attrs = (p: Props): Attributes<'svg'> => ({
  ...svg(p),
  children: (() => {
    switch (p['data-icon']) {
      case 'close':
        return (
          <Path
            d='m1.061 1 11.667 11.667M1 12.667 12.667 1'
            fill='none'
            strokeLinecap='round'
          />
        )
      case 'linegraph':
        return (
          <>
            <Line
              strokeMiterlimit='10'
              strokeWidth='1.5'
              transform='translate(0 4)'
              x2='80'
            />
            <Rect height='8' transform='translate(36 0)' width='8' />
          </>
        )
      default:
        return p.children
    }
  })()
})

export default attrs
