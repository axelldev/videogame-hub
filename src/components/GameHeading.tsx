import { GameQuery } from "@/hooks/useGames"
import { useSelectedGenre } from "@/hooks/useSelectedGenre"
import { useSelectedPlatform } from "@/hooks/useSelectedPlatform"
import { Heading } from "@chakra-ui/react"

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Props) {
  const genre = useSelectedGenre(gameQuery.genreId)
  const platform = useSelectedPlatform(gameQuery.platformId)
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {heading}
    </Heading>
  )
}
