/**
 * @file Unit Tests - bgimg
 * @module styles/mixins/tests/unit/bgimg
 */

import BgPosition from 'src/enums/bg-position'
import BgRepeat from 'src/enums/bg-repeat'
import BgSize from 'src/enums/bg-size'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../bgimg'

describe('unit:styles/mixins/bgimg', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: {
        backgroundImage: 'url("foo.svg")',
        backgroundPosition: BgPosition.center,
        backgroundRepeat: BgRepeat.norepeat,
        backgroundSize: BgSize.cover
      },
      parameters: ['foo.svg']
    },
    {
      expected: {
        backgroundPosition: BgPosition.bottom,
        backgroundRepeat: BgRepeat.x,
        backgroundSize: BgSize.contain
      },
      parameters: [null, BgSize.contain, BgPosition.bottom, BgRepeat.x]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.deep.equal(expected)
    })
  })
})
