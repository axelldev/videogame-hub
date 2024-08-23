import { ScreenShot } from "@/entities/Screenshot"
import { ApiService } from "@/services/api-client"
import { useQuery } from "@tanstack/react-query"

interface Props {
  gameId: number
}

export function useScreenshots({ gameId }: Props) {
  const apiClient = new ApiService<ScreenShot>(`games/${gameId}/screenshots`)
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  })
}
