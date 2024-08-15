import { useGenres } from "./useGenres"

export function useSelectedGenre(genreId?: number) {
  const { genres } = useGenres()
  return genres.find((g) => g.id === genreId)
}
