/**
 * @file Stop - attrs
 * @module components/atoms/Stop/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Stop.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'stop'>} Attributes object
 */
const attrs = (p: Props): Attributes<'stop'> => attributes<'stop'>(p)

export default attrs
