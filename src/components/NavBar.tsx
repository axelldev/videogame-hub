import { HStack, Image } from "@chakra-ui/react"
import logo from "@/assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  searchValue: string
  onSearch: (value: string) => void
}

export default function NavBar({ searchValue, onSearch }: Props) {
  return (
    <HStack justifyContent="space-between" p="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput value={searchValue} onChange={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}
