import { GENRES_QUERY_KEY } from "@/constants"
import { genreService } from "@/services/genresService"
import { Genre } from "@/entities/Genre"
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
