/**
 * @file Rect - attrs
 * @module components/atoms/Rect/attrs
 */

import type { Attributes } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Rect.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<'rect'>} Attributes object
 */
const attrs = (p: Props): Attributes<'rect'> => attributes<'rect'>(p)

export default attrs
