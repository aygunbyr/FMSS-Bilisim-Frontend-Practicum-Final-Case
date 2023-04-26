import { useSwapi } from '@/contexts/SwapiContext'

function CharactersHome() {
  const swapi = useSwapi()

  return (
    <div>
      {/* Characters Home */}
      {JSON.stringify(swapi?.characters)}
    </div>
  )
}

export default CharactersHome
