import '../styles/globals.css'
import '../styles/dashboard.css'
import '../styles/navbar.css'
import '../styles/landing.css'

import type { AppProps } from 'next/app'
import { DataContextProvider } from '../context/DataContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  )
}

export default MyApp
