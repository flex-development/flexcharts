/**
 * @file Unit Tests - Rect
 * @module components/atoms/Rect/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../Rect'

describe('unit:components/atoms/Rect', () => {
  describe('html', () => {
    it('should render <rect> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('rect')
    })
  })
})
