import { ApiService } from "./api-client"
import { Genre } from "../entities/Genre"

export const genreService = new ApiService<Genre>("genres")
