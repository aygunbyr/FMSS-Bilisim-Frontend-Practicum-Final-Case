import { useStarships } from '@/contexts/StarshipsContext'
import { Starship } from '@/types/starship'
import Images from '@/data/Image.json'
import Image from 'next/image'
import styles from '@/styles/Container.module.css'

function StarshipsHome() {
  const swapi = useStarships()

  return (
    <>
      {/* <div className={styles.wrapper}> */}
      <div className={styles.list}>
        {swapi?.starships?.map((starship: Starship, key: number) => (
          <div key={key} className={styles.item}>
            <Image
              className={styles.image}
              src={Images[key]?.img}
              alt="Starship"
              width="300"
              height="100"
              style={{ objectFit: 'cover' }}
            ></Image>
            <span className={styles.title}>{starship.name}</span>
          </div>
        ))}
      </div>
      <br />
      {swapi?.starshipCount! > 0 && (
        <button onClick={() => swapi?.loadMoreStarships()}>Load more...</button>
      )}
    </>
  )
}

export default StarshipsHome
