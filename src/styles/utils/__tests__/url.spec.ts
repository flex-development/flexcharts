/**
 * @file Unit Tests - url
 * @module styles/utils/tests/unit/url
 */

import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../url'

describe('unit:styles/utils/url', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'url("icon-star.svg")', parameters: ['icon-star.svg'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
