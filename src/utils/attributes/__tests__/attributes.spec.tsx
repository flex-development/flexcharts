/**
 * @file Unit Tests - attributes
 * @module utils/attributes/tests/unit
 */

import type { Attributes } from 'src/types'
import type { Testcase } from 'tests/interfaces'
import testSubject from '../attributes'

describe('unit:utils/attributes', () => {
  interface Case extends Testcase<Attributes> {
    parameters: Parameters<typeof testSubject>
  }

  const cases: Case[] = [
    { expected: { children: undefined }, parameters: [{}] },
    {
      expected: { 'aria-hidden': true, children: undefined },
      parameters: [{ hidden: true }]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
