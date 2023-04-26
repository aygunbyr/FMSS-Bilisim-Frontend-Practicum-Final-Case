import styles from '@/styles/Container.module.css'

type Props = {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return <main className={styles.container}>{children}</main>
}

export default Container
