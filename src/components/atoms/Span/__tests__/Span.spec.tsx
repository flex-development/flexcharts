/**
 * @file Unit Tests - Span
 * @module components/atoms/Span/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../Span'
import { Span } from '../Span.stories'

describe('unit:components/atoms/Span', () => {
  describe('html', () => {
    it('should render <span> element', () => {
      // Act
      const { container } = render(<TestSubject {...Span.args} />)

      // Expect
      expect(container.firstChild).to.have.tagName('span')
    })
  })
})
