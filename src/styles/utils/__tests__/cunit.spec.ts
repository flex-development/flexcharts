/**
 * @file Unit Tests - CUnit
 * @module styles/utils/tests/unit/CUnit
 */

import CSSUnit from 'src/enums/css-unit'
import type { TestcaseFn } from 'tests/interfaces'
import TestSubject from '../cunit'

describe('unit:styles/utils/CUnit', () => {
  describe('.em', () => {
    interface Case extends TestcaseFn<typeof TestSubject['em']> {}

    const cases: Case[] = [
      { expected: `0${CSSUnit.EM}`, parameters: [] },
      { expected: `-1${CSSUnit.EM}`, parameters: [-16] },
      { expected: `2${CSSUnit.EM}`, parameters: [`2${CSSUnit.EM}`] },
      { expected: `3${CSSUnit.EM}`, parameters: [`3${CSSUnit.REM}`] },
      { expected: `16${CSSUnit.EM}`, parameters: [`160${CSSUnit.PX}`, 10] },
      {
        expected: `0.24${CSSUnit.EM}`,
        parameters: [`24${CSSUnit.PERCENT}`, 12]
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.em(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.ems', () => {
    interface Case extends TestcaseFn<typeof TestSubject['ems']> {}

    const cases: Case[] = [
      { expected: false, parameters: [undefined] },
      { expected: true, parameters: [`0${CSSUnit.EM}`] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.ems(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.pixels', () => {
    interface Case extends TestcaseFn<typeof TestSubject['pixels']> {}

    const cases: Case[] = [
      { expected: false, parameters: [undefined] },
      { expected: true, parameters: [`0${CSSUnit.PX}`] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.pixels(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.px', () => {
    interface Case extends TestcaseFn<typeof TestSubject['px']> {}

    const cases: Case[] = [
      { expected: `4${CSSUnit.PX}`, parameters: [4] },
      { expected: `4${CSSUnit.PX}`, parameters: [`4${CSSUnit.PX}`] },
      { expected: `32${CSSUnit.PX}`, parameters: [`2${CSSUnit.REM}`] },
      { expected: `24${CSSUnit.PX}`, parameters: [`1.5${CSSUnit.EM}`] },
      { expected: `-0.16${CSSUnit.PX}`, parameters: [`-1${CSSUnit.PERCENT}`] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.px(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.rem', () => {
    interface Case extends TestcaseFn<typeof TestSubject['rem']> {}

    const cases: Case[] = [
      { expected: `0${CSSUnit.REM}`, parameters: [] },
      { expected: `1${CSSUnit.REM}`, parameters: [16] },
      { expected: `3${CSSUnit.REM}`, parameters: [`3${CSSUnit.EM}`] },
      { expected: `2${CSSUnit.REM}`, parameters: [`2${CSSUnit.REM}`] },
      { expected: `-16${CSSUnit.REM}`, parameters: [`-160${CSSUnit.PX}`, 10] },
      {
        expected: `0.24${CSSUnit.REM}`,
        parameters: [`24${CSSUnit.PERCENT}`, 12]
      }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.rem(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.rems', () => {
    interface Case extends TestcaseFn<typeof TestSubject['rems']> {}

    const cases: Case[] = [
      { expected: false, parameters: [undefined] },
      { expected: true, parameters: [`0${CSSUnit.REM}`] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
        expect(TestSubject.rems(...parameters)).to.equal(expected)
      })
    })
  })

  describe('.unitless', () => {
    interface Case extends TestcaseFn<typeof TestSubject['unitless']> {}

    const cases: Case[] = [
      { expected: 0, parameters: [0] },
      { expected: 2, parameters: [`2${CSSUnit.PX}`] },
      { expected: 13, parameters: [`13${CSSUnit.REM}`] },
      { expected: 42, parameters: [`42${CSSUnit.PERCENT}`] },
      { expected: 1.1875, parameters: [`1.1875${CSSUnit.EM}`] }
    ]

    cases.forEach(({ expected, parameters }) => {
      it(`should return ${expected} given ${pf(parameters)}`, () => {
        expect(TestSubject.unitless(...parameters)).to.equal(expected)
      })
    })
  })
})
