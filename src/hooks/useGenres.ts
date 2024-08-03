import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface Genre {
  id: number
  name: string
}

interface FetchGenresResponse {
  results: Genre[]
}

export const useGenres = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    apiClient
      .get<FetchGenresResponse>("/genres", {
        signal: controller.signal,
      })
      .then(({ data }) => setGenres(data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  return {
    loading,
    error,
    genres,
  }
}
