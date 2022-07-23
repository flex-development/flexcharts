/**
 * @file Unit Tests - Col
 * @module components/atoms/Col/tests/unit
 */

import wrapper from 'components/Colgroup/Colgroup'
import render from 'tests/utils/render'
import TestSubject from '../Col'

describe('unit:components/atoms/Col', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.body.appendChild(document.createElement('table'))
  })

  describe('html', () => {
    it('should render <col> element', () => {
      // Act
      const result = render(<TestSubject />, { container, wrapper })

      // Expect
      expect(result.container.firstChild!.firstChild).to.have.tagName('col')
    })
  })
})
