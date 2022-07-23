/**
 * @file Type Definitions - TransientKey
 * @module types/TransientKey
 */

import type TransientProp from 'src/enums/transient-prop'

/**
 * [Transient prop][1] names.
 *
 * [1]: https://styled-components.com/docs/api#transient-props
 *
 * @see {@link TransientProp}
 */
type TransientKey = keyof typeof TransientProp

export default TransientKey
