/**
 * @file Unit Tests - Paragraph
 * @module components/atoms/Paragraph/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../Paragraph'

describe('unit:components/atoms/Paragraph', () => {
  describe('html', () => {
    it('should render <p> element', () => {
      // Act
      const { container } = render(<TestSubject />)

      // Expect
      expect(container.firstChild).to.have.tagName('p')
    })
  })
})
