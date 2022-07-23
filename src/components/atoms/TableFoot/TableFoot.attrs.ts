/**
 * @file TableFoot - attrs
 * @module components/atoms/TableFoot/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './TableFoot.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'tfoot'>} Attributes object
 */
const attrs = (p: Props): Attributes<'tfoot'> => attributes<'tfoot'>(p)

export default attrs
