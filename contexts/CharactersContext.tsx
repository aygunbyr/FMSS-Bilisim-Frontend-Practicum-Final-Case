import {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { fetchCharacters } from '@/services/swapi'
import { Character } from '@/types/character'

type ProviderValues = {
  characters: Character[]
  filtered: Character[]
  characterCount: number
  filterText: string
  loadMoreCharacters: () => void
  setFilterText: Dispatch<SetStateAction<string>>
}

const CharactersContext = createContext<ProviderValues | null>(null)

type CharactersProviderProps = {
  children: React.ReactNode
}

const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [characterCount, setCharacterCount] = useState<number>(0)
  const [characterPage, setCharacterPage] = useState<number>(1)
  const [filtered, setFiltered] = useState<Character[]>([])
  const [filterText, setFilterText] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const { results: fetchedCharacters, count: fetchedCharacterCount } =
        await fetchCharacters(1)
      setCharacters(fetchedCharacters)
      setCharacterCount(fetchedCharacterCount - fetchedCharacters.length)
      setFiltered(fetchedCharacters)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filteredCharacters = characters.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase())
    )

    setFiltered(filteredCharacters)
  }, [filterText, characters])

  const loadMoreCharacters = async () => {
    if (characterCount === 0) {
      return
    }
    const nextPage = characterPage + 1
    const { results: fetchedCharacters } = await fetchCharacters(nextPage)
    setCharacters((prev) => [...prev, ...fetchedCharacters])
    setCharacterCount((prev) => prev - fetchedCharacters.length)
    setCharacterPage(nextPage)
  }

  const values: ProviderValues = {
    characters,
    filtered,
    characterCount,
    filterText,
    loadMoreCharacters,
    setFilterText,
  }

  return (
    <CharactersContext.Provider value={values}>
      {children}
    </CharactersContext.Provider>
  )
}

const useCharacters = () => useContext(CharactersContext)

export { CharactersProvider, useCharacters }
