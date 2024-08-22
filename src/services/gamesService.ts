import { ApiService } from "./api-client"
import { Game } from "../entities/Game"

export const gamesService = new ApiService<Game>("games")
