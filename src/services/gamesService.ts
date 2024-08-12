import { Platform } from "@/hooks/usePlatform"
import { ApiService } from "./api-client"

export interface Game {
  id: number
  name: string
  background_image?: string
  parent_platforms?: { platform: Platform }[]
  metacritic: number
  rating_top: number
}

export const gamesService = new ApiService<Game>("games")
