/**
 * @file TableData - attrs
 * @module components/atoms/TableData/attrs
 */

import { getFluidValue } from '@react-spring/shared'
import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './TableData.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'td'>} Attributes object
 */
const attrs = (p: Props): Attributes<'td'> => {
  return attributes<'td'>(p, {
    'aria-colspan': getFluidValue(p.colSpan),
    'aria-rowspan': getFluidValue(p.rowSpan)
  })
}

export default attrs
