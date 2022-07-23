/**
 * @file Unit Tests - useMemoCompare
 * @module hooks/useMemoCompare/tests/unit
 */

import { act, renderHook } from '@testing-library/react'
import type { Testcase } from 'tests/interfaces'
import testSubject from '../use-memo-compare'
import type { CompareFn, NextValue } from '../use-memo-compare.types'

describe('unit:hooks/useMemoCompare', () => {
  type T = number

  interface Case extends Testcase<T> {
    parameters: [NextValue<T>, CompareFn<T>?]
  }

  const CURR: T = 13
  const NEXT: T = CURR * 2

  const cases: Case[] = [
    { expected: CURR, parameters: [CURR] },
    { expected: CURR, parameters: [() => CURR] },
    { expected: NEXT, parameters: [NEXT] },
    { expected: NEXT, parameters: [() => NEXT] }
  ]

  cases.forEach(({ expected, parameters: params }) => {
    const state = `cached.current is ${CURR} and next is ${
      typeof params[0] === 'function' ? `() => ${params[0]()}` : params[0]
    }`

    it(`should return ${expected} if ${state}`, () => {
      // Arrange
      const render = renderHook<T, typeof params>(p => testSubject<T>(...p), {
        initialProps: [CURR, undefined]
      })

      // Act
      act(() => {
        render.rerender(params)
      })

      // Expect
      expect(render.result.current).to.equal(expected)
    })
  })
})
