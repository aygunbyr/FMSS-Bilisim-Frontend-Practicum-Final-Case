import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'
import { Starship } from '@/types/starship'
import { Starships } from '@/data/Starships'
import Images from '@/data/Image.json'
import styles from '@/styles/Detail.module.css'

type StarshipDetailProps = {
  data: Starship[]
}

function StarshipDetail({ data }: StarshipDetailProps) {
  const router = useRouter()
  const { id } = router.query

  // @ts-ignore
  const starship = data[parseInt(id)]

  // @ts-ignore
  const image = Images[parseInt(id)]?.img

  return (
    <>
      <div className={styles.back}>
        <Link href="/">
          <BiArrowBack /> Back to Starships
        </Link>
      </div>
      {!starship && <div>Loading...</div>}
      {starship && (
        <>
          <div className={styles.photoGrid}>
            <Image
              className={styles.image}
              src={image}
              width="800"
              height="450"
              alt={`Image: ${starship?.name}`}
            />
          </div>
          <div className={styles.title}>
            <h1>{starship?.name}</h1>
          </div>
          <div className={styles.details}>
            <p>Passengers: {starship?.passengers}</p>
            <p>Max Atmosphering Speed: {starship?.max_atmosphering_speed}</p>
            <p>Manufacturer: {starship?.manufacturer}</p>
            <p>Crew: {starship?.crew}</p>
            <p>Cargo Capacity: {starship?.cargo_capacity}</p>
          </div>
        </>
      )}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: Starships,
    },
  }
}

export async function getStaticPaths() {
  const paths = []
  for (let i = 0; i < Starships.length; i++) {
    paths.push({ params: { id: i.toString() } })
  }

  return { paths, fallback: false }
}

export default StarshipDetail
