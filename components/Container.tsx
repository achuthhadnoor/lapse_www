import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Footer from './Footer'
import Header from './Header'

const CrispWithNoSSR: any = dynamic(() => import('./crisp'), {
  ssr: false,
})

export default function Container(props: { [x: string]: any; children: any }) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Lapse – Save instant time-lapse screen recording ✨',
    description: `A simple app to record screen in timelapse on Mac and windows`,
    image: 'https://lapse.achuth.dev/banner.png',
    type: 'website',
    date: '1-1-2022',
    ...customMeta,
  }
  return (
    <div className=" bg-gradient-to-b from-green-900/20 text-neutral-300">
      <CrispWithNoSSR />
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://lapse.achuth.dev${router.asPath}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href={`https://lapse.achuth.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lapse" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@achuth_hadnoor" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          id="donate-for-turkiye"
          src={
            'https://www.donateforturkiye.org/cdn/widget.js?type=one&position=bottom-left'
          }
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  'UA-177599995-1');
        `,
          }}
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Header />
      <span className="fixed bottom-5 right-36 z-10">
        <a
          href="https://www.producthunt.com/posts/lapse-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lapse&#0045;2"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="54"
            viewBox="0 0 250 54"
            version="1.1"
          >
            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-130.000000, -73.000000)">
                <g transform="translate(130.000000, 73.000000)">
                  <rect
                    stroke="#D9E1EC"
                    strokeWidth="1"
                    fill="#FFFFFF"
                    x="0.5"
                    y="0.5"
                    width="249"
                    height="53"
                    rx="10"
                  />
                  <text
                    fontFamily="Helvetica-Bold, Helvetica"
                    fontSize="9"
                    fontWeight="bold"
                    fill="#4B587C"
                  >
                    <tspan x="53" y="20">
                      FEATURED ON
                    </tspan>
                  </text>
                  <text
                    fontFamily="Helvetica-Bold, Helvetica"
                    fontSize="21"
                    fontWeight="bold"
                    fill="#4B587C"
                  >
                    <tspan x="52" y="40">
                      Product Hunt
                    </tspan>
                  </text>
                  <g
                    transform="translate(201.000000, 13.000000)"
                    fill="#4B587C"
                  >
                    <g>
                      <polygon points="26.0024997 10 15 10 20.5012498 0" />
                      <text
                        fontFamily="Helvetica-Bold, Helvetica"
                        fontSize="13"
                        fontWeight="bold"
                      >
                        <tspan x="9.100000000000001" y="27">
                          294
                        </tspan>
                      </text>
                    </g>
                  </g>

                  <g transform="translate(11.000000, 12.000000)">
                    <path
                      d="M31,15.5 C31,24.0603917 24.0603917,31 15.5,31 C6.93960833,31 0,24.0603917 0,15.5 C0,6.93960833 6.93960833,0 15.5,0 C24.0603917,0 31,6.93960833 31,15.5"
                      fill="#4B587C"
                    />
                    <path
                      d="M17.4329412,15.9558824 L17.4329412,15.9560115 L13.0929412,15.9560115 L13.0929412,11.3060115 L17.4329412,11.3060115 L17.4329412,11.3058824 C18.7018806,11.3058824 19.7305882,12.3468365 19.7305882,13.6308824 C19.7305882,14.9149282 18.7018806,15.9558824 17.4329412,15.9558824 M17.4329412,8.20588235 L17.4329412,8.20601152 L10.0294118,8.20588235 L10.0294118,23.7058824 L13.0929412,23.7058824 L13.0929412,19.0560115 L17.4329412,19.0560115 L17.4329412,19.0558824 C20.3938424,19.0558824 22.7941176,16.6270324 22.7941176,13.6308824 C22.7941176,10.6347324 20.3938424,8.20588235 17.4329412,8.20588235"
                      fill="#FFFFFF"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </span>
      <main className="mx-auto max-w-6xl">{children}</main>
      <Footer />
    </div>
  )
}
