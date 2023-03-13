import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-5xl leading-loose tracking-widest mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
