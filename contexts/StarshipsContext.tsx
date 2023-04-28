import { createContext, useContext, useEffect, useState } from 'react'
import { fetchStarships } from '@/services/swapi'
import { Starship } from '@/types/starship'

type ProviderValues = {
  starships: Starship[]
  starshipCount: number
  loadMoreStarships: () => void
}

const StarshipsContext = createContext<ProviderValues | null>(null)

type StarshipsProviderProps = {
  children: React.ReactNode
}

const StarshipsProvider = ({ children }: StarshipsProviderProps) => {
  const [starships, setStarships] = useState<Starship[]>([])
  const [starshipCount, setStarshipCount] = useState<number>(0)
  const [starshipPage, setStarshipPage] = useState<number>(1)

  useEffect(() => {
    const fetchData = async () => {
      const { results: fetchedStarships, count: fetchedStarshipCount } =
        await fetchStarships(1)
      setStarships(fetchedStarships)
      setStarshipCount(fetchedStarshipCount - fetchedStarships.length)
    }
    fetchData()
  }, [])

  const loadMoreStarships = async () => {
    if (starshipCount === 0) {
      return
    }
    const nextPage = starshipPage + 1
    const { results: fetchedStarships } = await fetchStarships(nextPage)
    setStarships((prev) => [...prev, ...fetchedStarships])
    setStarshipCount((prev) => prev - fetchedStarships.length)
    setStarshipPage(nextPage)
  }

  const values: ProviderValues = {
    starships,
    starshipCount,
    loadMoreStarships,
  }

  return (
    <StarshipsContext.Provider value={values}>
      {children}
    </StarshipsContext.Provider>
  )
}

const useStarships = () => {
  const context = useContext(StarshipsContext)
  if (context === undefined) {
    throw new Error('useStarships must be used within a SwapiProvider')
  }
  return context
}

export { StarshipsProvider, useStarships }
