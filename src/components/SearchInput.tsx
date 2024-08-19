import { useGameQueryStore } from "@/store/useGameQueryStore"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

export default function SearchInput() {
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useGameQueryStore((store) => store.setSearchText)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!ref.current) return
    setSearchText(ref.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          type="text"
          name="search"
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  )
}
