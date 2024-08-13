import { GENRES_QUERY_KEY } from "@/constants"
import { Genre, genreService } from "@/services/genresService"
import { useQuery } from "@tanstack/react-query"

export const useGenres = () => {
  const { data, isLoading, error } = useQuery<Genre[]>({
    queryKey: [GENRES_QUERY_KEY],
    queryFn: () =>
      genreService.getAll().then((response) => response.data.results),
    staleTime: 60 * 60,
  })

  return {
    isLoading,
    error,
    genres: data ?? [],
  }
}
