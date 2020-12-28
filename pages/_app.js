import { createGlobalStyle, ThemeProvider } from 'styled-components'
import AppComponent from './../components/App'

const GlobalStyle = createGlobalStyle`
  body {
    font-family:sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #121212;
    color:#fff;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppComponent/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
