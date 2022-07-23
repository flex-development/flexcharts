/**
 * @file Unit Tests - Data
 * @module components/atoms/Data/tests/unit
 */

import type { JSONPrimitive } from '@flex-development/tutils'
import type { Testcase } from 'tests/interfaces'
import render from 'tests/utils/render'
import TestSubject from '../Data'
import type Props from '../Data.props'

describe('unit:components/atoms/Data', () => {
  describe('html', () => {
    it('should render <data> element', () => {
      // Act
      const { container } = render(<TestSubject />)

      // Expect
      expect(container.firstChild).to.have.tagName('data')
    })
  })

  describe('props', () => {
    interface Case extends Testcase<string> {
      value: Exclude<Required<Props>['value'], JSONPrimitive[]>
    }

    const cases: Case[] = [
      { expected: '0', value: 0 },
      { expected: 'key', value: 'key' }
    ]

    cases.forEach(({ expected, value }) => {
      it(`should render <data value=${value} /> given ${pf(value)}`, () => {
        // Act
        const { container } = render(<TestSubject value={value} />)

        // Expect
        expect(container.firstChild).to.have.attribute('value', expected)
      })
    })
  })
})
