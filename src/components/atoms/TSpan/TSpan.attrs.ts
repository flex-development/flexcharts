/**
 * @file TSpan - attrs
 * @module components/atoms/TSpan/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './TSpan.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'tspan'>} Attributes object
 */
const attrs = (p: Props): Attributes<'tspan'> => attributes<'tspan'>(p)

export default attrs
