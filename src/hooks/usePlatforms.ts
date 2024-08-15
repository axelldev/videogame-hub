import { useQuery } from "@tanstack/react-query"
import { PLATFORMS_QUERY_KEY } from "@/constants"
import { platformsService } from "./usePlatform"
import ms from "ms"

export function usePlatforms() {
  const { data, isLoading, error } = useQuery({
    queryKey: [PLATFORMS_QUERY_KEY],
    queryFn: () =>
      platformsService.getAll().then((response) => response.data.results),
    staleTime: ms("24h"), // 24h
  })

  return {
    platforms: data,
    isLoading,
    error,
  }
}
