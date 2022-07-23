/**
 * @file Unit Tests - absolute
 * @module styles/mixins/tests/unit/absolute
 */

import Position from 'src/enums/position'
import Space from 'src/enums/space'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../absolute'

describe('unit:styles/mixins/absolute', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: { position: Position.absolute }, parameters: [] },
    {
      expected: {
        bottom: Space[0],
        left: Space[0],
        position: Position.absolute,
        right: Space[0],
        top: Space[0]
      },
      parameters: [Space[0], Space[0], Space[0], Space[0]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
