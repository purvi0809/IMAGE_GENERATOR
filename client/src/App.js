import styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/Theme"

function App() {
  return <ThemeProvider theme={darkTheme}>hello</ThemeProvider>;
}
export default App;
