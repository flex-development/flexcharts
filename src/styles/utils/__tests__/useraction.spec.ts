/**
 * @file Unit Tests - useraction
 * @module styles/utils/tests/unit/useraction
 */

import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../useraction'

describe('unit:styles/utils/useraction', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: '&:active, &:focus, &:focus-visible, &:hover',
      parameters: []
    },
    {
      expected: '&:active, &:focus, &:focus-visible, &:hover',
      parameters: [false]
    },
    {
      expected: '&, &:active, &:focus, &:focus-visible, &:hover',
      parameters: [true]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
