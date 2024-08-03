import apiClient from "@/services/api-client"
import { Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface Game {
  id: number
  name: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

export default function GamesGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("game")
      .then((resp) => setGames(resp.data.results))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}
