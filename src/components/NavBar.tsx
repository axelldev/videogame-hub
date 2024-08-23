import logo from "@/assets/logo.webp"
import { HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

export default function NavBar() {
  return (
    <HStack justifyContent="space-between" p="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" cursor="pointer" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}
