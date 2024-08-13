import { GameQuery } from "@/hooks/useGames"
import { useGenres } from "@/hooks/useGenres"
import { usePlatforms } from "@/hooks/usePlatforms"
import { Heading } from "@chakra-ui/react"

interface Props {
  gameQuery: GameQuery
}

export default function GameHeading({ gameQuery }: Props) {
  const { genres } = useGenres()
  const { platforms } = usePlatforms()

  const platformName =
    platforms?.find((platform) => platform.id === gameQuery.patformId)?.name ||
    ""
  const genreName =
    genres.find((genre) => genre.id === gameQuery.genreId)?.name || ""

  const heading = `${platformName} ${genreName} Games`

  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {heading}
    </Heading>
  )
}
