/**
 * @file Unit Tests - TableFoot
 * @module components/atoms/TableFoot/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../TableFoot'

describe('unit:components/atoms/TableFoot', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('table'))
  })

  describe('html', () => {
    it('should render <tfoot> element', () => {
      // Act
      const result = render(<TestSubject />, { container })

      // Expect
      expect(result.container.firstChild).to.have.tagName('tfoot')
    })
  })
})
