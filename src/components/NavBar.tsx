import { HStack, Image } from "@chakra-ui/react"
import logo from "@/assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <HStack justifyContent="space-between" p="10px">
      <Image
        src={logo}
        boxSize="60px"
        cursor="pointer"
        onClick={() => navigate("/")}
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}
