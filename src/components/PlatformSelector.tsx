import { Platform } from "@/hooks/usePlatform"
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
  selectedPlatformId?: number
  onSelectPlatform: (platform: Platform | null) => void
}

export default function PlatformSelector({
  selectedPlatformId,
  onSelectPlatform,
}: Props) {
  const { platforms, isLoading, error } = usePlatforms()
  const platform = platforms?.find(
    (platform) => platform.id === selectedPlatformId
  )

  if (error) return

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name ?? "Platforms"}
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
