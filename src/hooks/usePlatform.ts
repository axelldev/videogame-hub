import { ApiService } from "@/services/api-client"

export interface Platform {
  id: number
  name: string
  slug: string
}

export const platformsService = new ApiService<Platform>(
  "/platforms/lists/parents"
)
