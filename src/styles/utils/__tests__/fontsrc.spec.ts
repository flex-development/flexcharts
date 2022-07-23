/**
 * @file Unit Tests - fontsrc
 * @module styles/utils/tests/unit/fontsrc
 */

import type { TestcaseFn } from 'tests/interfaces'
import dedent from 'ts-dedent'
import testSubject from '../fontsrc'

describe('unit:styles/utils/fontsrc', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    {
      expected: 'url("fonts/BasierCircle-Medium.woff");',
      parameters: ['BasierCircle-Medium', [['woff']]]
    },
    {
      expected: dedent`
        url("fonts/BasierCircle-Bold.otf") format("opentype"),
        url("fonts/BasierCircle-Bold.ttf") format("truetype");
      `,
      parameters: [
        'BasierCircle-Bold',
        [
          ['otf', 'opentype'],
          ['ttf', 'truetype']
        ]
      ]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    const returns = expected.replace(/\n/g, '')

    it(`should return ${pf(returns)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
