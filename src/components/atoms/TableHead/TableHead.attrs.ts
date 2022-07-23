/**
 * @file TableHead - attrs
 * @module components/atoms/TableHead/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './TableHead.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'thead'>} Attributes object
 */
const attrs = (p: Props): Attributes<'thead'> => attributes<'thead'>(p)

export default attrs
