/**
 * @file Unit Tests - Stop
 * @module components/atoms/Stop/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../Stop'

describe('unit:components/atoms/Stop', () => {
  describe('html', () => {
    it('should render <stop> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('stop')
    })
  })
})
