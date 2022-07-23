/**
 * @file Unit Tests - Custom Style Props
 * @module config/style-props/tests/unit
 */

import url from 'styles/utils/url'
import type { TestcaseFn } from 'tests/interfaces'
import { CSP_CONFIG as TestSubject } from '../style-props'

describe('unit:config/style-props', () => {
  describe('CSP_CONFIG', () => {
    describe('$bgimg', () => {
      describe('.transform', () => {
        interface Case
          extends TestcaseFn<
            NonNullable<typeof TestSubject['$bgimg']['transform']>
          > {}

        const cases: Case[] = [
          { expected: null, parameters: [''] },
          { expected: null, parameters: [null] },
          {
            expected: url('icon.svg', false),
            parameters: ['icon.svg']
          },
          {
            expected: url('vite.svg', false),
            parameters: [url('vite.svg', false)]
          },
          {
            expected: `${url('vite-m.svg', false)}, ${url('vite.svg', false)}`,
            parameters: [`vite-m.svg,${url('vite.svg', false)}`]
          }
        ]

        cases.forEach(({ expected, parameters: params }) => {
          it(`should return ${expected} given ${pf(params)}`, () => {
            expect(TestSubject.$bgimg.transform!(...params)).to.equal(expected)
          })
        })
      })
    })
  })
})
