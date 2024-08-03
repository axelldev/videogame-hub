import { Platform } from "@/hooks/useGames"
import { usePlatforms } from "@/hooks/usePlatforms"
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const skeletons = Array.from({ length: 5 }, (_, i) => i + 1)

interface Props {
  selectedPlatform: Platform | null
  onSelectPlatform: (platform: Platform | null) => void
}

export default function PlatformSelector({
  selectedPlatform,
  onSelectPlatform,
}: Props) {
  const { platforms, isLoading, error } = usePlatforms()

  if (error) return

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ?? "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)}>All</MenuItem>
        {platforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
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
