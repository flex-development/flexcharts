/**
 * @file Unit Tests - TableBody
 * @module components/atoms/TableBody/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../TableBody'

describe('unit:components/atoms/TableBody', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('table'))
  })

  describe('html', () => {
    it('should render <tbody> element', () => {
      // Act
      const result = render(<TestSubject />, { container })

      // Expect
      expect(result.container.firstChild).to.have.tagName('tbody')
    })
  })
})
