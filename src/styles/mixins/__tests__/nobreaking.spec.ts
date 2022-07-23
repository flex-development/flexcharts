/**
 * @file Unit Tests - nobreaking
 * @module styles/mixins/tests/unit/nobreaking
 */

import type { Overwrite } from '@flex-development/tutils'
import Whitespace from 'src/enums/whitespace'
import type { StylePropType } from 'src/namespaces'
import important from 'src/styles/utils/important'
import type { CSSObject } from 'styled-components/macro'
import type { Testcase } from 'tests/interfaces'
import testSubject from '../nobreaking'

describe('unit:styles/mixins/nobreaking', () => {
  interface Case
    extends Testcase<
      Overwrite<CSSObject, { whiteSpace?: StylePropType.Whitespace }>
    > {
    parameters: Parameters<typeof testSubject>
  }

  const cases: Case[] = [
    { expected: { whiteSpace: Whitespace.nowrap }, parameters: [] },
    { expected: { whiteSpace: Whitespace.nowrap }, parameters: [false] },
    {
      expected: { whiteSpace: important(Whitespace.nowrap) },
      parameters: [true]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
