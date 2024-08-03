import { useGenres } from "@/hooks/useGenres"

export default function GenreList() {
  const { loading, genres, error } = useGenres()
  return genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
}
