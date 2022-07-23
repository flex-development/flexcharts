/**
 * @file Unit Tests - border
 * @module styles/mixins/tests/unit/border
 */

import theme from 'styles/theme'
import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../border'

describe('unit:styles/mixins/border', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: [theme.border.widths.thick, 'solid', theme.colors.warmgrey],
      parameters: [theme.border.widths.thick, theme.colors.warmgrey]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      // Act
      const result = testSubject(...parameters)

      // Expect
      expected.forEach(exp => expect(result).to.include(exp))
    })
  })
})
