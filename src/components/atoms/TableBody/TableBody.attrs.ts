/**
 * @file TableBody - attrs
 * @module components/atoms/TableBody/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './TableBody.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'tbody'>} Attributes object
 */
const attrs = (p: Props): Attributes<'tbody'> => attributes<'tbody'>(p)
export default attrs
