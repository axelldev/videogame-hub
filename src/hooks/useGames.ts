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
  parent_platforms?: { platform: Platform }[]
  metacritic: number
}

export interface FetchGamesResponse {
  count: number
  results: Game[]
}

export function useGames(
  selectedGenre?: Genre | null,
  selectedPlatform?: Platform | null,
  order?: string
) {
  const { isLoading, data, error } = useData<FetchGamesResponse>(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: order,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, order]
  )
  return {
    games: data?.results,
    error,
    isLoading,
  }
}
