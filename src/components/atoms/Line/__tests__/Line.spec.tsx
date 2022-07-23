/**
 * @file Unit Tests - Line
 * @module components/atoms/Line/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../Line'

describe('unit:components/atoms/Line', () => {
  describe('html', () => {
    it('should render <line> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('line')
    })
  })
})
