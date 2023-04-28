import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container'
import styles from '@/styles/Layout.module.css'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div id="wrapper">
        <Header />
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
