import '../styles/globals.css'
import '../styles/dashboard.css'
import '../styles/navbar.css'
import '../styles/landing.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
