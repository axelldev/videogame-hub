import { useData } from "./useData"
import { Genre } from "./useGenres"

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

export interface FetchGamesResponse {
  count: number
  results: Game[]
}

export function useGames(selectedGenre?: Genre | null) {
  const { isLoading, data, error } = useData<FetchGamesResponse>(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  )
  return {
    games: data?.results,
    error,
    isLoading,
  }
}
