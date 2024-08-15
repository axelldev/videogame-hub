import { GENRES_QUERY_KEY } from "@/constants"
import { Genre, genreService } from "@/services/genresService"
import { useQuery } from "@tanstack/react-query"
import ms from "ms"

export const useGenres = () => {
  const { data, isLoading, error } = useQuery<Genre[]>({
    queryKey: [GENRES_QUERY_KEY],
    queryFn: () =>
      genreService.getAll().then((response) => response.data.results),
    staleTime: ms("24h"),
  })

  return {
    isLoading,
    error,
    genres: data ?? [],
  }
}
