import {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { fetchStarships } from '@/services/swapi'
import { Starship } from '@/types/starship'

type ProviderValues = {
  starships: Starship[]
  filtered: Starship[]
  starshipCount: number
  filterText: string
  loadMoreStarships: () => void
  setFilterText: Dispatch<SetStateAction<string>>
}

const StarshipsContext = createContext<ProviderValues | null>(null)

type StarshipsProviderProps = {
  children: React.ReactNode
}

const StarshipsProvider = ({ children }: StarshipsProviderProps) => {
  const [starships, setStarships] = useState<Starship[]>([])
  const [starshipCount, setStarshipCount] = useState<number>(0)
  const [starshipPage, setStarshipPage] = useState<number>(1)
  const [filtered, setFiltered] = useState<Starship[]>([])
  const [filterText, setFilterText] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const { results: fetchedStarships, count: fetchedStarshipCount } =
        await fetchStarships(1)
      setStarships(fetchedStarships)
      setStarshipCount(fetchedStarshipCount - fetchedStarships.length)
      setFiltered(fetchedStarships)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filteredStarships = starships.filter(
      ({ name, model }) =>
        name.includes(filterText) || model.includes(filterText)
    )

    setFiltered(filteredStarships)
  }, [filterText, starships])

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
    filtered,
    starshipCount,
    filterText,
    loadMoreStarships,
    setFilterText,
  }

  return (
    <StarshipsContext.Provider value={values}>
      {children}
    </StarshipsContext.Provider>
  )
}

const useStarships = () => useContext(StarshipsContext)
export { StarshipsProvider, useStarships }
