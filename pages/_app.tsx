import { useState, useEffect } from 'react'
import Router from 'next/router'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { StarshipsProvider } from '@/contexts/StarshipsContext'
import { CharactersProvider } from '@/contexts/CharactersContext'
import Loader from '@/components/Loader'
import Head from 'next/head'

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
      <Head>
        <title>Star Wars App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarshipsProvider>
        <CharactersProvider>
          <Layout>
            {isLoading && <Loader />}
            <Component {...pageProps} />
          </Layout>
        </CharactersProvider>
      </StarshipsProvider>
    </>
  )
}
