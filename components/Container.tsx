import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import Header from "./header";
import Footer from "./Footer";

const CrispWithNoSSR = dynamic(
    () => import('./crisp'),
    { ssr: false }
  )
  
export default function Container(props: { [x: string]: any; children: any }) {
    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: "Lapse – Save instant time-lapse screen recording ✨",
        description: `A simple app to record screen in timelapse on Mac and windows`,
        image: "https://lapse.achuth.dev/static/images/banner.png",
        type: "website",
        date: "1-1-2022",
        ...customMeta,
    };
    return (
        <>
            <CrispWithNoSSR/>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://lapse.achuth.dev${router.asPath}`}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href={`https://lapse.achuth.dev${router.asPath}`} />
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
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon-180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                /> 
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="/favicon.ico"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff"></meta>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
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
            {children}
            <Footer/>
        </>
    )
}