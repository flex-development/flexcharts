/**
 * @file Unit Tests - useMediaQuery
 * @module hooks/useMediaQuery/tests/unit
 */

import { renderHook } from '@testing-library/react'
import type { TestcaseFn } from 'tests/interfaces'
import matchMedia from 'tests/utils/match-media'
import testSubject from '../use-media-query'

describe('unit:hooks/useMediaQuery', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: false, parameters: ['(min-width: 1920px)'] },
    { expected: true, parameters: ['(min-width: 768px)'] }
  ]

  beforeEach(() => {
    const stub: typeof window['matchMedia'] = matchMedia({
      '(max-width: 390px)': false,
      '(min-width: 768px)': true
    })

    vi.stubGlobal('matchMedia', stub)
  })

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${expected} given ${pf(parameters)}`, () => {
      // Act
      const { result } = renderHook(() => testSubject(...parameters))

      // Expect
      expect(result.current).to.equal(expected)
    })
  })
})
