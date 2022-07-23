/**
 * @file Unit Tests - Icon
 * @module components/atoms/Icon/tests/unit
 */

import type { Testcase } from 'tests/interfaces'
import render from 'tests/utils/render'
import TestSubject from '../Icon'
import type Props from '../Icon.props'

describe('unit:components/atoms/Icon', () => {
  describe('html', () => {
    it('should render <svg> element', () => {
      // Act
      const { container } = render(<TestSubject />)

      // Expect
      expect(container.firstChild).to.have.tagName('svg')
    })
  })

  describe('props', () => {
    describe('data-icon', () => {
      interface Case extends Testcase<Required<Props>['data-icon']> {
        icon: Required<Props>['data-icon']
      }

      const cases: Case[] = [
        { expected: 'close', icon: 'close' },
        { expected: 'linegraph', icon: 'linegraph' }
      ]

      cases.forEach(({ expected, icon }) => {
        const element = `<svg data-icon=${pf(expected)} />`

        it(`should render ${element} given ${pf(icon)}`, () => {
          // Act
          const { container } = render(<TestSubject data-icon={icon} />)

          // Expect
          expect(container.firstChild).to.have.attribute('data-icon', expected)
        })
      })
    })
  })
})
