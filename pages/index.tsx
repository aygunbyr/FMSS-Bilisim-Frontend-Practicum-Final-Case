import Image from 'next/image'
import Link from 'next/link'
import { useStarships } from '@/contexts/StarshipsContext'
import { Starship } from '@/types/starship'
import Images from '@/data/Image.json'
import styles from '@/styles/Container.module.css'

function StarshipsHome() {
  const context = useStarships()

  return (
    <>
      {/* <div className={styles.wrapper}> */}
      <div className={styles.list}>
        {context?.starships?.map((starship: Starship, key: number) => {
          if (starship.name !== Images[key]?.name)
            console.log(
              `JSON Image #${key} is not corresponding to starship ${starship.name}`
            )

          return (
            <Link className={styles.link} href={`starships/${key}`} key={key}>
              <div className={styles.item}>
                <Image
                  className={styles.image}
                  src={Images[key]?.img}
                  alt="Starship"
                  width="270"
                  height="150"
                ></Image>
                <span className={styles.title}>{starship.name}</span>
                <div className={styles.detail}>
                  <span>
                    <strong>Model: </strong>
                    {starship.model}
                  </span>
                  <br />
                  <span>
                    <strong>Hyperdrive Rating: </strong>
                    {starship.hyperdrive_rating}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <br />
      {context?.starshipCount! > 0 && (
        <div className={styles.btnContainer}>
          <button
            className={styles.loadMore}
            onClick={() => context?.loadMoreStarships()}
          >
            Load more
          </button>
        </div>
      )}
    </>
  )
}

export default StarshipsHome
