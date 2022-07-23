/**
 * @file Unit Tests - TableData
 * @module components/atoms/TableData/tests/unit
 */

import { SpringValue } from '@react-spring/web'
import wrapper from 'components/TableRow/TableRow'
import type { Testcase } from 'tests/interfaces'
import render from 'tests/utils/render'
import TestSubject from '../TableData'
import type Props from '../TableData.props'

describe('unit:components/atoms/TableData', () => {
  describe('html', () => {
    let container: HTMLElement

    beforeEach(() => {
      container = document.body.appendChild(document.createElement('table'))
    })

    it('should render <td> element', () => {
      // Act
      const result = render(<TestSubject />, { container, wrapper })

      // Expect
      expect(result.container.firstChild!.firstChild).to.have.tagName('td')
    })
  })

  describe('props', () => {
    describe('colSpan', () => {
      interface Case extends Testcase<number> {
        colSpan: NonNullable<Props['colSpan']>
      }

      const cases: Case[] = [
        { colSpan: 2, expected: 2 },
        { colSpan: new SpringValue(3), expected: 3 }
      ]

      let container: HTMLElement

      beforeEach(() => {
        container = document.body.appendChild(document.createElement('table'))
      })

      cases.forEach(({ colSpan, expected }) => {
        const element = `<td aria-colspan="${expected}" />`

        it(`should render ${element} given ${pf(colSpan)}`, () => {
          // Act
          const result = render(<TestSubject colSpan={colSpan} />, {
            container,
            wrapper
          })

          // Expect
          expect(result.container.firstChild!.firstChild).to.have.attribute(
            'aria-colspan',
            expected.toString()
          )
        })
      })
    })

    describe('rowSpan', () => {
      interface Case extends Testcase<number> {
        rowSpan: NonNullable<Props['rowSpan']>
      }

      const cases: Case[] = [
        { expected: 4, rowSpan: 4 },
        { expected: 5, rowSpan: new SpringValue(5) }
      ]

      let container: HTMLElement

      beforeEach(() => {
        container = document.body.appendChild(document.createElement('table'))
      })

      cases.forEach(({ expected, rowSpan }) => {
        const element = `<td aria-rowspan="${expected}" />`

        it(`should render ${element} given ${pf(rowSpan)}`, () => {
          // Act
          const result = render(<TestSubject rowSpan={rowSpan} />, {
            container,
            wrapper
          })

          // Expect
          expect(result.container.firstChild!.firstChild).to.have.attribute(
            'aria-rowspan',
            expected.toString()
          )
        })
      })
    })
  })
})
