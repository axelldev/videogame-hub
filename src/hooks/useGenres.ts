import { useData } from "./useData"

export interface Genre {
  id: number
  name: string
  image_background: string
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
