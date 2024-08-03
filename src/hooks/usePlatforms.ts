import { useData } from "./useData"

export interface Platform {
  id: number
  name: string
  slug: string
}

interface FetchPlatformsResponse {
  results: Platform[]
}

export function usePlatforms() {
  const { data, isLoading, error } = useData<FetchPlatformsResponse>(
    "/platforms/lists/parents"
  )

  return {
    platforms: data?.results,
    isLoading,
    error,
  }
}
