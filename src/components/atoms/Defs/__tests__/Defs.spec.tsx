/**
 * @file Unit Tests - Defs
 * @module components/atoms/Defs/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../Defs'

describe('unit:components/atoms/Defs', () => {
  describe('html', () => {
    it('should render <defs> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('defs')
    })
  })
})
