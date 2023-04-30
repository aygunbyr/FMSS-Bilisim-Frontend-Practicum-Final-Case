import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'
import { Character } from '@/types/character'
import { Characters } from '@/data/Characters'
import { Avatars } from '@/data/Avatars'
import styles from '@/styles/Detail.module.css'

type CharacterDetailProps = {
  data: Character[]
}

function CharacterDetail({ data }: CharacterDetailProps) {
  const router = useRouter()
  const { id } = router.query

  // @ts-ignore
  const character = data[parseInt(id)]

  // @ts-ignore
  const image = Avatars[parseInt(id)]?.img

  return (
    <>
      <div className={styles.back}>
        <Link href="/characters">
          <BiArrowBack /> Back to Characters
        </Link>
      </div>
      {!character && <div>Loading...</div>}
      {character && (
        <>
          <div className={styles.photoGrid}>
            <Image
              className={styles.image}
              src={image}
              width="800"
              height="450"
              alt={`Image: ${character?.name}`}
            />
          </div>
          <div className={styles.title}>
            <h1>{character?.name}</h1>
          </div>
          <div className={styles.details}>
            <p>Gender: {character?.gender}</p>
            <p>Birth Year: {character?.birth_year}</p>
            <p>Height: {character?.height}</p>
            <p>Skin Color: {character?.skin_color}</p>
          </div>
        </>
      )}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: Characters,
    },
  }
}

export async function getStaticPaths() {
  const paths = []
  for (let i = 0; i < Characters.length; i++) {
    paths.push({ params: { id: i.toString() } })
  }

  return { paths, fallback: false }
}

export default CharacterDetail
