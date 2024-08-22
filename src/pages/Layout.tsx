import NavBar from "@/components/NavBar"
import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  )
}
