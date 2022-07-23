declare module 'polished/lib/helpers/em' {
  import type CSSUnitValue from 'src/namespaces/css-unit-value'

  function em(
    value: CSSUnitValue.unit | number,
    base?: CSSUnitValue.px | number
  ): CSSUnitValue.em

  export default em
}
