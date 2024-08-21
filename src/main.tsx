import ReactDOM from "react-dom/client"

import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import theme from "./theme"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import router from "./routes"

const root = ReactDOM.createRoot(document.getElementById("root")!)

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
