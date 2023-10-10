import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemesType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemesType {}
}
