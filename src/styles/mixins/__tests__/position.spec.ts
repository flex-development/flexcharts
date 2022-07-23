/**
 * @file Unit Tests - position
 * @module styles/mixins/tests/unit/position
 */

import Position from 'src/enums/position'
import Space from 'src/enums/space'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../position'

describe('unit:styles/mixins/position', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: {}, parameters: [] },
    {
      expected: { position: Position.absolute, top: Space[0] },
      parameters: [Position.absolute, Space[0]]
    },
    {
      expected: { position: Position.fixed, right: Space[4] },
      parameters: [Position.fixed, null, Space[4]]
    },
    {
      expected: { bottom: Space[8], position: Position.relative },
      parameters: [Position.relative, null, undefined, Space[8]]
    },
    {
      expected: { left: Space[16], position: Position.static },
      parameters: [Position.static, undefined, undefined, undefined, Space[16]]
    },
    {
      expected: {
        bottom: Space[0],
        left: Space[0],
        position: Position.sticky,
        right: Space[0],
        top: Space[0]
      },
      parameters: [Position.sticky, Space[0], Space[0], Space[0], Space[0]]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
