import { GAMES_QUERY_KEY } from "@/constants"
import { useInfiniteQuery } from "@tanstack/react-query"
import { gamesService } from "@/services/gamesService"

export interface GameQuery {
  genreId?: number
  patformId?: number
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
            platforms: query.patformId,
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
