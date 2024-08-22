import { ApiService } from "@/services/api-client"
import { Platform } from "../entities/Platform"

export const platformsService = new ApiService<Platform>(
  "/platforms/lists/parents"
)
