declare module 'polished/lib/helpers/rem' {
  import type CSSUnitValue from 'src/namespaces/css-unit-value'

  function rem(
    value: CSSUnitValue.unit | number,
    base?: CSSUnitValue.px | number
  ): CSSUnitValue.rem

  export default rem
}
