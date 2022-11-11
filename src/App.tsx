import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <HomePage/>
    </ThemeProvider>
  )
}