/**
 * @file Unit Tests - Box
 * @module components/atoms/Box/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../Box'

describe('unit:components/atoms/Box', () => {
  describe('html', () => {
    it('should render <div> element', () => {
      // Act
      const { container } = render(<TestSubject />)

      // Expect
      expect(container.firstChild).to.have.tagName('div')
    })
  })
})
