import { useData } from "./useData"

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

export function useGames() {
  const { isLoading, data, error } = useData<FetchGamesResponse>("games")
  return {
    games: data?.results,
    error,
    isLoading,
  }
}
