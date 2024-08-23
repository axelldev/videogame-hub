import { useTrailers } from "@/hooks/useTrailers"

interface Props {
  gameId: number
}

export default function GameTrailer({ gameId }: Props) {
  const { data, isLoading, error } = useTrailers(gameId)

  if (isLoading) return null
  if (error) throw error

  const trailers = data?.data.results || []
  const firstTrailer = trailers[0]

  return firstTrailer ? (
    <video
      poster={firstTrailer.preview}
      src={firstTrailer.data[480]}
      controls
    />
  ) : null
}
