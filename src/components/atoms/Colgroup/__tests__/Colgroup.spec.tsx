/**
 * @file Unit Tests - Colgroup
 * @module components/atoms/Colgroup/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../Colgroup'

describe('unit:components/atoms/Colgroup', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('table'))
  })

  describe('html', () => {
    it('should render <colgroup> element', () => {
      // Act
      const result = render(<TestSubject />, { container })

      // Expect
      expect(result.container.firstChild).to.have.tagName('colgroup')
    })
  })
})
