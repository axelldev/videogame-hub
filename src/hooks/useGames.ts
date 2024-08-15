import { GAMES_QUERY_KEY } from "@/constants"
import { useInfiniteQuery } from "@tanstack/react-query"
import { gamesService } from "@/services/gamesService"
import ms from "ms"

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  search?: string
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
            genres: query.genreId,
            platforms: query.platformId,
            ordering: query.sortOrder,
            search: query.search,
            page: pageParam,
          },
        })
        .then((response) => response.data),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: ms("24h"),
  })
}
