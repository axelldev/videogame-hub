import { usePlatforms } from "@/hooks/usePlatforms"
import { useSelectedPlatform } from "@/hooks/useSelectedPlatform"
import { useGameQueryStore } from "@/store/useGameQueryStore"
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

export default function PlatformSelector() {
  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  )
  const setSelectedPlatformId = useGameQueryStore(
    (store) => store.setPlatformId
  )
  const { platforms, isLoading, error } = usePlatforms()
  const platform = useSelectedPlatform(selectedPlatformId)

  if (error) return

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name ?? "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSelectedPlatformId(null)}>All</MenuItem>
        {platforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
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
