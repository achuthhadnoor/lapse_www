import { ThemedButton, ThemeWrapper } from '../components/Theme'
import AppComponent from './../components/App'


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeWrapper> 
        <AppComponent/>
        <ThemedButton/>
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  )
}
