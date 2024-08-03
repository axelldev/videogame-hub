import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useState, useEffect } from "react"

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
}

export interface FetchGamesResponse {
  count: number
  results: Game[]
}

export function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGamesResponse>("games", {
        signal: controller.signal,
      })
      .then((resp) => setGames(resp.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })

    return () => controller.abort()
  }, [])

  return {
    games,
    error,
  }
}
