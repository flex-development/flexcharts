/**
 * @file Col - attrs
 * @module components/atoms/Col/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Col.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'col'>} Attributes object
 */
const attrs = (p: Props): Attributes<'col'> => attributes<'col'>(p)

export default attrs
