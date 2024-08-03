import { usePlatforms } from "@/hooks/usePlatforms"
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Spinner,
} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const skeletons = Array.from({ length: 5 }, (_, i) => i + 1)

export default function PlatformSelector() {
  const { platforms, isLoading, error } = usePlatforms()

  if (error) return

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {platforms?.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}

        {isLoading &&
          skeletons?.map((index) => (
            <MenuItem key={index} disabled>
              <Skeleton width="100%" height={5} />
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  )
}
