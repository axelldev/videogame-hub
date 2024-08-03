import ReactDOM from "react-dom/client"

import { ChakraProvider } from "@chakra-ui/react"
import App from "./App"
import theme from "./theme"
import React from "react"

const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
