import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  *::after, *::before {
    box-sizing: inherit;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #181818;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility !important;
  }
`

export default GlobalStyle
