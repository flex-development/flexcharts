/**
 * @file Unit Tests - ThemeProvider
 * @module providers/ThemeProvider/tests/unit
 */

import { render } from '@testing-library/react'
import TestSubject from '../ThemeProvider'
import type Props from '../ThemeProvider.props'

describe('unit:providers/ThemeProvider', () => {
  describe('props', () => {
    describe('children', () => {
      it('should render theme consumers', () => {
        // Arrange
        const props: Props = { children: <h1>hello world</h1> }

        // Act
        const { container } = render(<TestSubject {...props} />)

        // Expect
        expect(container.children.length).to.be.gt(0)
      })
    })
  })
})
