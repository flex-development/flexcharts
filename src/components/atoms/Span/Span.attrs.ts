/**
 * @file Span - attrs
 * @module components/atoms/Span/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Span.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'span'>} Attributes object
 */
const attrs = (p: Props): Attributes<'span'> => attributes<'span'>(p)

export default attrs
