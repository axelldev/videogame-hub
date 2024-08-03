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
  metacritic: number
}

export interface FetchGamesResponse {
  count: number
  results: Game[]
}

export function useGames() {
  const [loading, setLoading] = useState(false)
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    apiClient
      .get<FetchGamesResponse>("games", {
        signal: controller.signal,
      })
      .then((resp) => {
        setGames(resp.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return {
    games,
    error,
    loading,
  }
}
