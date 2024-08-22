import NavBar from "@/components/NavBar"
import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <NavBar />
        <Box padding={5}>
          <Heading>{error.status}</Heading>
          <Text>{error.statusText}</Text>
        </Box>
      </>
    )
  }

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>Sorry, an unexpected error has occurred.</Text>
      </Box>
    </>
  )
}
