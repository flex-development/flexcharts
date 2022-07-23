/**
 * @file Unit Tests - useWindowSize
 * @module hooks/useWindowSize/tests/unit
 */

import { act, fireEvent, renderHook } from '@testing-library/react'
import testSubject from '../use-window-size'

describe('unit:hooks/useWindowSize', () => {
  it('should return initial window dimensions', () => {
    // Act
    const { result } = renderHook(() => testSubject())

    // Expect
    expect(result.current.height).to.equal(768)
    expect(result.current.width).to.equal(1024)
  })

  it('should return new dimensions when window is resized', () => {
    // Arrange
    const height = 568
    const width = 375

    // Act
    const { result } = renderHook(() => testSubject())

    act(() => {
      window.innerHeight = height
      window.innerWidth = width

      fireEvent(window, new Event('resize'))
    })

    // Expect
    expect(result.current.height).to.equal(height)
    expect(result.current.width).to.equal(width)
  })
})
