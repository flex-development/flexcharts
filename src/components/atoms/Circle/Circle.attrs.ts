/**
 * @file Circle - attrs
 * @module components/atoms/Circle/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Circle.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'circle'>} Attributes object
 */
const attrs = (p: Props): Attributes<'circle'> => attributes<'circle'>(p)

export default attrs
