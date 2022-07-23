/**
 * @file Unit Tests - G
 * @module components/atoms/G/tests/unit
 */

import wrapper from 'components/Svg/Svg'
import render from 'tests/utils/render'
import TestSubject from '../G'

describe('unit:components/atoms/G', () => {
  describe('html', () => {
    it('should render <g> element', () => {
      // Act
      const { container } = render(<TestSubject />, { wrapper })

      // Expect
      expect(container.firstChild!.firstChild).to.have.tagName('g')
    })
  })

  describe('props', () => {
    describe('left && top', () => {
      it('should set x and y of translate function', () => {
        // Arrange
        const left: number = faker.datatype.number(13)
        const top: number = faker.datatype.number(left * 4)

        // Act
        const { container } = render(<TestSubject left={left} top={top} />, {
          wrapper
        })

        // Expect
        expect(container.firstChild!.firstChild).to.have.attribute(
          'transform',
          `translate(${left},${top})`
        )
      })
    })

    describe('left', () => {
      it('should set x of translate function', () => {
        // Arrange
        const left: number = faker.datatype.number(13)

        // Act
        const { container } = render(<TestSubject left={left} />, { wrapper })

        // Expect
        expect(container.firstChild!.firstChild).to.have.attribute(
          'transform',
          `translate(${left})`
        )
      })
    })

    describe('top', () => {
      it('should set x and y of translate function', () => {
        // Arrange
        const top: number = faker.datatype.number(13)

        // Act
        const { container } = render(<TestSubject top={top} />, { wrapper })

        // Expect
        expect(container.firstChild!.firstChild).to.have.attribute(
          'transform',
          `translate(0,${top})`
        )
      })
    })

    describe('transform', () => {
      it('should override props.left and props.top', () => {
        // Arrange
        const transform: string = 'translate(4,17)'

        // Act
        const { container } = render(
          <TestSubject left={1} top={1} transform={transform} />,
          { wrapper }
        )

        // Expect
        expect(container.firstChild!.firstChild).to.have.attribute(
          'transform',
          transform
        )
      })
    })
  })
})
