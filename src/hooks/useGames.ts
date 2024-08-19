import { GAMES_QUERY_KEY } from "@/constants"
import { gamesService } from "@/services/gamesService"
import { useGameQueryStore } from "@/store/useGameQueryStore"
import { useInfiniteQuery } from "@tanstack/react-query"
import ms from "ms"

export function useGames() {
  const query = useGameQueryStore((s) => s.gameQuery)

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
