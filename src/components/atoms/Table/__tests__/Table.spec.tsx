/**
 * @file Unit Tests - Table
 * @module components/atoms/Table/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../Table'

describe('unit:components/atoms/Table', () => {
  describe('html', () => {
    it('should render <table> element', () => {
      // Act
      const { container } = render(<TestSubject />)

      // Expect
      expect(container.firstChild).to.have.tagName('table')
    })
  })
})
