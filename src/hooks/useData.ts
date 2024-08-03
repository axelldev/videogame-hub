import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

export function useData<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    setIsLoading(true)

    apiClient
      .get<T>(endpoint, {
        signal: controller.signal,
      })
      .then((response) => {
        setIsLoading(false)
        setData(response.data)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [endpoint])

  return {
    data,
    isLoading,
    error,
  }
}
