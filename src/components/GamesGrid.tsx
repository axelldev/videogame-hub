import { Platform, useGames } from "@/hooks/useGames"
import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "@/hooks/useGenres"

interface Props {
  selectedPlatform: Platform | null
  selectedGenre: Genre | null
  order?: string
}

export default function GamesGrid({
  selectedGenre,
  selectedPlatform,
  order,
}: Props) {
  const { games, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    order
  )
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          games?.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  )
}
