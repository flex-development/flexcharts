/**
 * @file Unit Tests - TableRow
 * @module components/atoms/TableRow/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../TableRow'

describe('unit:components/atoms/TableRow', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('table'))
  })

  describe('html', () => {
    it('should render <tr> element', () => {
      // Act
      const result = render(<TestSubject />, { container })

      // Expect
      expect(result.container.firstChild).to.have.tagName('tr')
    })
  })
})
