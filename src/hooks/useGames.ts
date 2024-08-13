import { GAMES_QUERY_KEY } from "@/constants"
import { Genre } from "@/services/genresService"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Platform } from "./usePlatform"
import { gamesService } from "@/services/gamesService"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  search: string
}

export function useGames(query: GameQuery) {
  return useInfiniteQuery({
    queryKey: [GAMES_QUERY_KEY, query],
    initialPageParam: 1,
    queryFn: async ({ signal, pageParam }) =>
      gamesService
        .getAll({
          signal,
          params: {
            genres: query.genre?.id,
            platforms: query.platform?.id,
            ordering: query.sortOrder,
            search: query.search,
            page: pageParam,
          },
        })
        .then((response) => response.data),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
  })
}
