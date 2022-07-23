/**
 * @file Unit Tests - Caption
 * @module components/atoms/Caption/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../Caption'

describe('unit:components/atoms/Caption', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('table'))
  })

  describe('html', () => {
    it('should render <caption> element', () => {
      // Act
      const result = render(<TestSubject />, { container })

      // Expect
      expect(result.container.firstChild).to.have.tagName('caption')
    })
  })
})
