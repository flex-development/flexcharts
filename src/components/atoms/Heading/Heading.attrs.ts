/**
 * @file Heading - attrs
 * @module components/atoms/Heading/attrs
 */

import { Attributes, TagHeading as Tag } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Heading.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<Tag>} Attributes object
 */
const attrs = (p: Props): Attributes<Tag> => attributes<Tag>(p)

export default attrs
