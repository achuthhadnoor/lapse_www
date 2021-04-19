import { Page } from "../layouts/page"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <Page>
      <Head>
        <script type="text/javascript" src="https://gumroad.com/js/gumroad.js"></script>
      </Head>
      <Component {...pageProps} />
    </Page>
}

export default MyApp
