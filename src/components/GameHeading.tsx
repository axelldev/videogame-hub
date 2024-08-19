import { useSelectedGenre } from "@/hooks/useSelectedGenre"
import { useSelectedPlatform } from "@/hooks/useSelectedPlatform"
import { useGameQueryStore } from "@/store/useGameQueryStore"
import { Heading } from "@chakra-ui/react"

export default function GameHeading() {
  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId)
  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  )
  const genre = useSelectedGenre(selectedGenreId)
  const platform = useSelectedPlatform(selectedPlatformId)
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {heading}
    </Heading>
  )
}
