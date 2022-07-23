/**
 * @file Unit Tests - useTheme
 * @module hooks/useTheme/tests/unit
 */

import { renderHook } from '@testing-library/react'
import theme from 'styles/theme'
import testSubject from '../use-theme'

describe('unit:hooks/useTheme', () => {
  it('should return theme specification object', () => {
    expect(renderHook(() => testSubject()).result.current).to.deep.equal(theme)
  })
})
