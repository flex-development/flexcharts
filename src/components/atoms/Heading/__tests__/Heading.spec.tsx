/**
 * @file Unit Tests - Heading
 * @module components/atoms/Heading/tests/unit
 */

import type { TagHeading } from 'src/types'
import type { Testcase } from 'tests/interfaces'
import render from 'tests/utils/render'
import TestSubject from '../Heading'

describe('unit:components/atoms/Heading', () => {
  describe('html', () => {
    it('should render <h1> element', () => {
      // Act
      const { container } = render(<TestSubject />)

      // Expect
      expect(container.firstChild).to.have.tagName('h1')
    })
  })

  describe('props', () => {
    describe('as', () => {
      interface Case extends Testcase<TagHeading> {
        as: TagHeading
      }

      const cases: Case[] = [
        { as: 'h1', expected: 'h1' },
        { as: 'h2', expected: 'h2' },
        { as: 'h3', expected: 'h3' },
        { as: 'h4', expected: 'h4' },
        { as: 'h5', expected: 'h5' },
        { as: 'h6', expected: 'h6' }
      ]

      cases.forEach(({ as, expected }) => {
        it(`should render <${expected} /> given ${pf(as)}`, () => {
          // Act
          const { container } = render(<TestSubject as={as} />)

          // Expect
          expect(container.firstChild).to.have.tagName(expected)
        })
      })
    })
  })
})
