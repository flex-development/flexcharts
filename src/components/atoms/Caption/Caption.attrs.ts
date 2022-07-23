/**
 * @file Caption - attrs
 * @module components/atoms/Caption/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Caption.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'caption'>} Attributes object
 */
const attrs = (p: Props): Attributes<'caption'> => attributes<'caption'>(p)

export default attrs
