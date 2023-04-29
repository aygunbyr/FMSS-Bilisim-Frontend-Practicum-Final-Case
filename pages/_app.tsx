import { useState, useEffect } from 'react'
import Router from 'next/router'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { StarshipsProvider } from '@/contexts/StarshipsContext'
import Loader from '@/components/Loader'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setIsLoading(true)
    })

    Router.events.on('routeChangeComplete', (url) => {
      setIsLoading(false)
    })

    Router.events.on('routeChangeError', (url) => {
      setIsLoading(false)
    })
  }, [Router])

  return (
    <>
      <StarshipsProvider>
        <Layout>
          {isLoading && <Loader />}
          <Component {...pageProps} />
        </Layout>
      </StarshipsProvider>
    </>
  )
}
