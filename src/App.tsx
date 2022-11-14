import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { RecoilRoot } from 'recoil'

export function App() {

  return (
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </RecoilRoot>
  )
}