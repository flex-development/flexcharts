/**
 * @file Line - attrs
 * @module components/atoms/Line/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Line.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'line'>} Attributes object
 */
const attrs = (p: Props): Attributes<'line'> => attributes<'line'>(p)

export default attrs
