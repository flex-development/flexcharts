/**
 * @file Unit Tests - image
 * @module styles/utils/tests/unit/image
 */

import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../image'

describe('unit:styles/utils/image', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: 'url("img/bg-hero.png")', parameters: ['bg-hero.png'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
