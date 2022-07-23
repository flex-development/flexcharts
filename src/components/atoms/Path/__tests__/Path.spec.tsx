/**
 * @file Unit Tests - Path
 * @module components/atoms/Path/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../Path'

describe('unit:components/atoms/Path', () => {
  describe('html', () => {
    it('should render <path> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('path')
    })
  })
})
