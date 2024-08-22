import { GAME_BY_SLUG_KEY } from "@/constants"
import { ApiService } from "@/services/api-client"
import { Game } from "@/entities/Game"
import { useQuery } from "@tanstack/react-query"

const apiClient = new ApiService<Game>("/games")

export function useGameDetail(slug?: string) {
  return useQuery({
    queryKey: [GAME_BY_SLUG_KEY, slug],
    queryFn: () => apiClient.get(slug || ""),
  })
}
