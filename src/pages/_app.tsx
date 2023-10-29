import type { AppProps } from 'next/app'
import Application from '../Application'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Application>
      <Component {...pageProps} />
    </Application>
  )
}

export default MyApp
