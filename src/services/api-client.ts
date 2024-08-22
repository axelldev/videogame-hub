import { FetchResponse } from "@/types/http"
import axios, { AxiosRequestConfig } from "axios"

const axiosIntance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
})

export class ApiService<T> {
  endopint: string

  constructor(endpoint: string) {
    this.endopint = endpoint
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosIntance.get<FetchResponse<T>>(this.endopint, config)

  get = async (id: string | number, config?: AxiosRequestConfig) => {
    const response = await axiosIntance.get<T>(this.endopint + "/" + id, config)
    return response.data
  }
}
