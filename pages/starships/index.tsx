import { useSwapi } from '@/contexts/SwapiContext'

function StarshipsHome() {
  const swapi = useSwapi()

  return (
    <div>
      {/* Starships Home */}
      {JSON.stringify(swapi?.starships)}
    </div>
  )
}

export default StarshipsHome
