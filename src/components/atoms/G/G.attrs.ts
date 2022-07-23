/**
 * @file G - attrs
 * @module components/atoms/G/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './G.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'g'>} Attributes object
 */
const attrs = (p: Props): Attributes<'g'> => {
  return attributes<'g'>(p, {
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
