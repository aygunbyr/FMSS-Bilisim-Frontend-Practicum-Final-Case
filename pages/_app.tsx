import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { StarshipsProvider } from '@/contexts/StarshipsContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StarshipsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StarshipsProvider>
    </>
  )
}
