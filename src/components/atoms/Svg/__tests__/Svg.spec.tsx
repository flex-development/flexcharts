/**
 * @file Unit Tests - Svg
 * @module components/atoms/Svg/tests/unit
 */

import render from 'tests/utils/render'
import TestSubject from '../Svg'

describe('unit:components/atoms/Svg', () => {
  describe('html', () => {
    it('should render <svg> element', () => {
      // Act
      const { container } = render(<TestSubject />)

      // Expect
      expect(container.firstChild).to.have.tagName('svg')
    })
  })

  describe('props', () => {
    describe('left && top', () => {
      it('should set x and y of translate function', () => {
        // Arrange
        const left: number = faker.datatype.number(13)
        const top: number = faker.datatype.number(left * 2)
        const expected: string = `translate(${left},${top})`

        // Act
        const { container } = render(<TestSubject left={left} top={top} />)

        // Expect
        expect(container.firstChild).to.have.attribute('transform', expected)
      })
    })

    describe('left', () => {
      it('should set x of translate function', () => {
        // Arrange
        const left: number = faker.datatype.number(13)
        const expected: string = `translate(${left})`

        // Act
        const { container } = render(<TestSubject left={left} />)

        // Expect
        expect(container.firstChild).to.have.attribute('transform', expected)
      })
    })

    describe('top', () => {
      it('should set x and y of translate function', () => {
        // Arrange
        const top: number = faker.datatype.number(13)
        const expected: string = `translate(0,${top})`

        // Act
        const { container } = render(<TestSubject top={top} />)

        // Expect
        expect(container.firstChild).to.have.attribute('transform', expected)
      })
    })

    describe('transform', () => {
      it('should override props.left and props.top', () => {
        // Arrange
        const transform: string = 'translate(17,4)'

        // Act
        const { container } = render(
          <TestSubject left={0} top={0} transform={transform} />
        )

        // Expect
        expect(container.firstChild).to.have.attribute('transform', transform)
      })
    })
  })
})
