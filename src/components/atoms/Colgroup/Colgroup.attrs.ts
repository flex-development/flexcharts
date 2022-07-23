/**
 * @file Colgroup - attrs
 * @module components/atoms/Colgroup/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Colgroup.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'colgroup'>} Attributes object
 */
const attrs = (p: Props): Attributes<'colgroup'> => attributes<'colgroup'>(p)

export default attrs
