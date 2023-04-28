import Link from 'next/link'
import { useRouter } from 'next/router'
import { fetchStarships } from '@/services/swapi'
import { Starship } from '@/types/starship'
import { Starships } from '@/data/Starships'

type StarshipDetailProps = {
  data: Starship[]
}

function StarshipDetail({ data }: StarshipDetailProps) {
  const router = useRouter()
  const { id } = router.query

  // @ts-ignore
  const starship = data[parseInt(id)]

  return (
    <div>
      <Link href="/">Back to Starships (sola yaslanacak)</Link>
      Starship Detail
      <h1>{starship.name}</h1>
    </div>
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
  for (let i = 0; i < 36; i++) {
    paths.push({ params: { id: i.toString() } })
  }

  return { paths, fallback: false }
}

export default StarshipDetail
