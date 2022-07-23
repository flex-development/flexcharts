/**
 * @file Unit Tests - Gradient
 * @module components/atoms/Gradient/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import type { TagGradient } from 'src/types'
import type { Testcase } from 'tests/interfaces'
import render from 'tests/utils/render'
import TestSubject from '../Gradient'
import { Linear } from '../Gradient.stories'

describe('unit:components/atoms/Gradient', () => {
  describe('html', () => {
    it('should render <linearGradient> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('linearGradient')
    })
  })

  describe('props', () => {
    describe('$stops', () => {
      it('should render with <stop /> elements as children', () => {
        // Act
        const { container } = render(<TestSubject {...Linear.args} />, {
          wrapper
        })

        // Expect
        container.firstChild!.firstChild!.childNodes.forEach((node, i) => {
          const { offset, stopColor } = Linear.args!.$stops![i]!

          expect(node).to.have.tagName('stop')
          expect(node).to.have.attribute('offset', offset as string)
          expect(node).to.have.attribute('stop-color', stopColor as string)
        })
      })
    })

    describe('as', () => {
      interface Case extends Testcase<TagGradient> {
        as: TagGradient
      }

      const cases: Case[] = [
        { as: 'linearGradient', expected: 'linearGradient' },
        { as: 'radialGradient', expected: 'radialGradient' }
      ]

      cases.forEach(({ as, expected }) => {
        it(`should render <${expected} /> given ${pf(as)}`, () => {
          // Act
          const { container } = render(<TestSubject as={as} />, { wrapper })

          // Expect
          expect(container.firstChild!.firstChild).to.have.tagName(expected)
        })
      })
    })
  })
})
