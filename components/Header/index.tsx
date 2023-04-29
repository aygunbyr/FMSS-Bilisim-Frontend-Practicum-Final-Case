import Link from 'next/link'
import Logo from '@/assets/Star_Wars-Logo.wine.png'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/assets/Star_Wars-Logo.wine.png"
            alt="Star Wars Logo"
            height={200}
            width={300}
          />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">STARSHIPS</Link>
          </li>
          <li>
            <Link href="/characters">CHARACTERS</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
