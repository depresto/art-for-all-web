import 'antd/dist/antd.min.css'
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Application from "../Application";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Application>
      <Component {...pageProps} />
    </Application>
  );
}

export default MyApp;
