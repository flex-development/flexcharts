/**
 * @file Data - Component Props
 * @module components/atoms/Data/props
 */

import type { NumberString } from '@flex-development/tutils'
import type { Props } from 'src/types'

interface DataProps extends Omit<Props<'data'>, 'value'> {
  /**
   * Specifies the machine-readable translation of the content of the element.
   */
  value?: NumberString
}

export default DataProps
