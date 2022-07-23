/**
 * @file Text - attrs
 * @module components/atoms/Text/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Text.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'text'>} Attributes object
 */
const attrs = (p: Props): Attributes<'text'> => attributes<'text'>(p)

export default attrs
