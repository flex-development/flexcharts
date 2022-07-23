/**
 * @file Unit Tests - important
 * @module styles/utils/tests/unit/important
 */

import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../important'

describe('unit:styles/utils/important', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '0 !important', parameters: [0] },
    { expected: 'null !important', parameters: [null] },
    { expected: '2em !important', parameters: ['2em'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
