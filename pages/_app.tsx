import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { SwapiProvider } from '@/contexts/SwapiContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SwapiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SwapiProvider>
    </>
  )
}
