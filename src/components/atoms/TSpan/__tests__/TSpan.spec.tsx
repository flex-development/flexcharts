/**
 * @file Unit Tests - TSpan
 * @module components/atoms/TSpan/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../TSpan'

describe('unit:components/atoms/TSpan', () => {
  describe('html', () => {
    it('should render <tspan> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('tspan')
    })
  })
})
