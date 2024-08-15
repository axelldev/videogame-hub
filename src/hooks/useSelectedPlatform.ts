import { usePlatforms } from "./usePlatforms"

export function useSelectedPlatform(platformId?: number) {
  const { platforms } = usePlatforms()
  return platforms?.find((p) => p.id === platformId)
}
