import type ThemeSpec from 'src/interfaces/theme-spec'
import {} from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeSpec {}
}
