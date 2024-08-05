import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        type="text"
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </InputGroup>
  )
}
