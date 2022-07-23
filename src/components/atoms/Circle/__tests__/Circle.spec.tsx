/**
 * @file Unit Tests - Circle
 * @module components/atoms/Circle/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../Circle'

describe('unit:components/atoms/Circle', () => {
  describe('html', () => {
    it('should render <circle> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('circle')
    })
  })
})
