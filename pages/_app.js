import { Page } from "../layouts/page"

function MyApp({ Component, pageProps }) {
  return <Page><Component {...pageProps} /></Page>
}

export default MyApp
