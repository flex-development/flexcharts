/**
 * @file Unit Tests - TableHeader
 * @module components/atoms/TableHeader/tests/unit
 */

import { SpringValue } from '@react-spring/web'
import wrapper from 'components/TableRow/TableRow'
import type { Testcase } from 'tests/interfaces'
import render from 'tests/utils/render'
import TestSubject from '../TableHeader'
import type Props from '../TableHeader.props'

describe('unit:components/atoms/TableHeader', () => {
  describe('html', () => {
    let container: HTMLElement

    beforeEach(() => {
      container = document.body.appendChild(document.createElement('table'))
    })

    it('should render <th> element', () => {
      // Act
      const result = render(<TestSubject />, { container, wrapper })

      // Expect
      expect(result.container.firstChild!.firstChild).to.have.tagName('th')
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
        const element = `<th aria-colspan="${expected}" />`

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
        const element = `<th aria-rowspan="${expected}" />`

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
