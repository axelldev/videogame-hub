import { Trailer } from "@/entities/Trailer"
import { ApiService } from "@/services/api-client"
import { useQuery } from "@tanstack/react-query"

export function useTrailers(gameId: number) {
  const apiClient = new ApiService<Trailer>(`/games/${gameId}/movies`)

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  })
}
