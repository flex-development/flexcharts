/**
 * @file Unit Tests - TableHead
 * @module components/atoms/TableHead/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../TableHead'

describe('unit:components/atoms/TableHead', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('table'))
  })

  describe('html', () => {
    it('should render <thead> element', () => {
      // Act
      const result = render(<TestSubject />, { container })

      // Expect
      expect(result.container.firstChild).to.have.tagName('thead')
    })
  })
})
