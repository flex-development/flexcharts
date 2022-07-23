/**
 * @file Defs - attrs
 * @module components/atoms/Defs/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Defs.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'defs'>} Attributes object
 */
const attrs = (p: Props): Attributes<'defs'> => attributes<'defs'>(p)

export default attrs
