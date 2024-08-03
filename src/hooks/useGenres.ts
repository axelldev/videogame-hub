import { useData } from "./useData"

interface Genre {
  id: number
  name: string
}

interface FetchGenresResponse {
  results: Genre[]
}

export const useGenres = () => {
  const { isLoading, data, error } = useData<FetchGenresResponse>("genres")
  return {
    isLoading,
    error,
    genres: data?.results,
  }
}
