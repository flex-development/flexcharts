/**
 * @file Paragraph - attrs
 * @module components/atoms/Paragraph/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Paragraph.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'p'>} Attributes object
 */
const attrs = (p: Props): Attributes<'p'> => attributes<'p'>(p)

export default attrs
