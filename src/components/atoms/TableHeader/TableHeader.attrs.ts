/**
 * @file TableHeader - attrs
 * @module components/atoms/TableHeader/attrs
 */

import { getFluidValue } from '@react-spring/shared'
import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './TableHeader.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'th'>} Attributes object
 */
const attrs = (p: Props): Attributes<'th'> => {
  return attributes<'th'>(p, {
    'aria-colspan': getFluidValue(p.colSpan),
    'aria-rowspan': getFluidValue(p.rowSpan)
  })
}

export default attrs
