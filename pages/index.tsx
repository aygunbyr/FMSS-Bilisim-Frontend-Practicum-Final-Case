import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useStarships } from '@/contexts/StarshipsContext'
import { Starship } from '@/types/starship'
import Images from '@/data/Image.json'
import styles from '@/styles/Starships.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function StarshipsHome() {
  const context = useStarships()

  const [filter, setFilter] = useState('')

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setFilter(event.currentTarget.value)
  }

  const handleClear = () => {
    setFilter('')
    context?.setFilterText('')
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    context?.setFilterText(filter)
  }

  const filterRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    filterRef?.current?.focus()
  }, [])

  return (
    <>
      <div className={styles.filterContainer}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.filterInput}
            type="text"
            name="filter"
            value={filter}
            ref={filterRef}
            placeholder="Name, model..."
            onChange={handleChange}
          />
          <button className={styles.button} type="submit">
            Filter
          </button>
          <button className={styles.button} type="button" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>
      <div className={styles.list}>
        {context?.filtered?.map((starship: Starship, key: number) => {
          const image =
            Images.find((image) => image.name === starship.name)?.img ??
            '/assets/no-image.jpg'

          const index = Images.findIndex(
            (image) => image.name === starship.name
          )

          return (
            <Link className={styles.link} href={`starships/${index}`} key={key}>
              <div className={styles.item}>
                <Image
                  className={styles.image}
                  src={image}
                  alt="Starship"
                  width="260"
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
