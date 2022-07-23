/**
 * @file Gradient - attrs
 * @module components/atoms/Gradient/attrs
 */

import Stop from 'components/Stop/Stop'
import { nanoid } from 'nanoid'
import type { Attributes, TagGradient as Tag } from 'src/types'
import attributes from 'utils/attributes/attributes'
import type Props from './Gradient.props'

/**
 * Attaches additional attributes.
 *
 * @param {Props} p - Component props
 * @return {Attributes<Tag>} Attributes object
 */
const attrs = (p: Props): Attributes<Tag> => {
  return attributes<Tag>(p, {
    children:
      (p.$stops?.length ?? -1) > 0
        ? p.$stops!.map(stop => <Stop {...stop} key={nanoid()} />)
        : p.children
  })
}

export default attrs
