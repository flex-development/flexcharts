/**
 * @file Table - attrs
 * @module components/atoms/Table/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Table.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'table'>} Attributes object
 */
const attrs = (p: Props): Attributes<'table'> => attributes<'table'>(p)

export default attrs
