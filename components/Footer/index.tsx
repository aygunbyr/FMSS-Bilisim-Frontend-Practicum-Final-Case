import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import styles from '@/styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <h3>More from Star Wars:</h3>
      <br />
      <div className={styles.logoContainer}>
        <Link
          href="https://www.facebook.com/StarWars"
          target="_blank"
          className={styles.facebook}
        >
          <BsFacebook size={24} />
        </Link>
        <Link
          href="https://www.instagram.com/starwars/"
          target="_blank"
          className={styles.instagram}
        >
          <BsInstagram size={24} />
        </Link>
        <Link
          href="https://twitter.com/starwars"
          target="_blank"
          className={styles.twitter}
        >
          <BsTwitter size={24} />
        </Link>
        <Link
          href="https://www.youtube.com/user/starwars"
          target="_blank"
          className={styles.youtube}
        >
          <BsYoutube size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Footer
