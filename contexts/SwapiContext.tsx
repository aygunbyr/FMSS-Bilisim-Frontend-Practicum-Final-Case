import { createContext, useContext, useEffect, useState } from 'react'
import {
  fetchFilms,
  fetchPeople,
  fetchPlanets,
  fetchSpecies,
  fetchStarships,
  fetchVehicles,
} from '@/services/swapi'

import { Starship } from '@/types/starship'
import { Character } from '@/types/character'

type ProviderValues = {
  starships: Starship[]
  characters: Character[]
}

const SwapiContext = createContext<ProviderValues | null>(null)

type Props = {
  children: React.ReactNode
}

const SwapiProvider = ({ children }: Props) => {
  const [starships, setStarships] = useState<Starship[]>([])
  const [characters, setCharacters] = useState<Character[]>([])

  ;(async () => {
    const { results: fstarships } = await fetchStarships(1)

    setStarships(fstarships)

    const { results: fcharacters } = await fetchPeople(1)

    setCharacters(fcharacters)
  })()

  const values: ProviderValues = {
    starships,
    characters,
  }

  return (
    <SwapiContext.Provider value={values}>{children}</SwapiContext.Provider>
  )
}

const useSwapi = () => useContext(SwapiContext)

export { SwapiProvider, useSwapi }
