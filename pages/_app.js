import { createGlobalStyle, ThemeProvider } from 'styled-components'
import AppComponent from './../components/App'
import Image from 'next/image'

const GlobalStyle = createGlobalStyle`
  body {
    font-family:sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #121212;
    color:#fff;
    background:url('/light.png')
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
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <AppComponent/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
