/**
 * @file TableRow - attrs
 * @module components/atoms/TableRow/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './TableRow.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'tr'>} Attributes object
 */
const attrs = (p: Props): Attributes<'tr'> => attributes<'tr'>(p)

export default attrs
