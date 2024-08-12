import { ApiService } from "./api-client"

export interface Genre {
  id: number
  name: string
  image_background: string
}

export const genreService = new ApiService<Genre>("genres")
