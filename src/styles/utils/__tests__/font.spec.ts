/**
 * @file Unit Tests - font
 * @module styles/utils/tests/unit/font
 */

import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../font'

describe('unit:styles/utils/font', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: 'url("fonts/BasierCircle-Regular.otf")',
      parameters: ['BasierCircle-Regular.otf']
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
