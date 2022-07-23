/**
 * @file Data - attrs
 * @module components/atoms/Data/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Data.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'data'>} Attributes object
 */
const attrs = (p: Props): Attributes<'data'> => attributes<'data'>(p)

export default attrs
