/**
 * @file Box - attrs
 * @module components/atoms/Box/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Box.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'div'>} Attributes object
 */
const attrs = (p: Props): Attributes<'div'> => attributes<'div'>(p)

export default attrs
