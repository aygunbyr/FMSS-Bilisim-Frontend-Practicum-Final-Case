import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCharacters } from '@/contexts/CharactersContext'
import { Character } from '@/types/character'
import { Avatars } from '@/data/Avatars'
import styles from '@/styles/Characters.module.css'

function CharactersHome() {
  const context = useCharacters()

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
        {context?.filtered?.map((character: Character, key: number) => {
          const image =
            Avatars.find((image) => image.name === character.name)?.img ||
            '/assets/no-image.jpg'

          return (
            <Link className={styles.link} href={`characters/${key}`} key={key}>
              <div className={styles.item}>
                <Image
                  className={styles.image}
                  src={image}
                  alt="Character"
                  width="260"
                  height="300"
                ></Image>
                <span className={styles.title}>{character.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
      <br />
      {context?.characterCount! > 0 && (
        <div className={styles.btnContainer}>
          <button
            className={styles.loadMore}
            onClick={() => context?.loadMoreCharacters()}
          >
            Load more
          </button>
        </div>
      )}
    </>
  )
}

export default CharactersHome
