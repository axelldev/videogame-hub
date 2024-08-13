import { useQuery } from "@tanstack/react-query"
import { PLATFORMS_QUERY_KEY, STALE_1_DAY } from "@/constants"
import { platformsService } from "./usePlatform"

export function usePlatforms() {
  const { data, isLoading, error } = useQuery({
    queryKey: [PLATFORMS_QUERY_KEY],
    queryFn: () =>
      platformsService.getAll().then((response) => response.data.results),
    staleTime: STALE_1_DAY, // 24h
  })

  return {
    platforms: data,
    isLoading,
    error,
  }
}
