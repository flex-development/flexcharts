/**
 * @file Svg - attrs
 * @module components/atoms/Svg/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Svg.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'svg'>} Attributes object
 */
const attrs = (p: Props): Attributes<'svg'> => {
  return attributes<'svg'>(p, {
    transform:
      p.transform ??
      (p.left !== undefined && p.top !== undefined
        ? `translate(${p.left},${p.top})`
        : p.left !== undefined
        ? `translate(${p.left})`
        : p.top !== undefined
        ? `translate(0,${p.top})`
        : undefined)
  })
}

export default attrs
