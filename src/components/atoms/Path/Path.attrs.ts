/**
 * @file Path - attrs
 * @module components/atoms/Path/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Path.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'path'>} Attributes object
 */
const attrs = (p: Props): Attributes<'path'> => attributes<'path'>(p)

export default attrs
