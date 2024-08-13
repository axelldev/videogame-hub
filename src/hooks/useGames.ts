import { GAMES_QUERY_KEY } from "@/constants"
import { Genre } from "@/services/genresService"
import { useQuery } from "@tanstack/react-query"
import { Platform } from "./usePlatform"
import { gamesService } from "@/services/gamesService"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  search: string
}

export function useGames(query: GameQuery) {
  return useQuery({
    queryKey: [GAMES_QUERY_KEY, query],
    queryFn: async ({ signal }) =>
      gamesService
        .getAll({
          signal,
          params: {
            genres: query.genre?.id,
            platforms: query.platform?.id,
            ordering: query.sortOrder,
            search: query.search,
          },
        })
        .then((response) => response.data),
  })
}
