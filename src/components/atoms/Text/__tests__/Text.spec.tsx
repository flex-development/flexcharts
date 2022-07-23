/**
 * @file Unit Tests - Text
 * @module components/atoms/Text/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../Text'

describe('unit:components/atoms/Text', () => {
  describe('html', () => {
    it('should render <text> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('text')
    })
  })
})
