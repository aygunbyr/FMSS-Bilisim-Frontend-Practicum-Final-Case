import Link from 'next/link'
import styles from '@/styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img
            className={styles.logo}
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt=""
          />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/starships">STARSHIPS</Link>
          </li>
          <li>
            <Link href="/characters">CHARACTERS</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
