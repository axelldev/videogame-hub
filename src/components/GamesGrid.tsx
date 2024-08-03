import { useGames } from "@/hooks/useGames"
import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

export default function GamesGrid() {
  const { games, error, loading } = useGames()
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
        spacing={10}
      >
        {loading && skeletons.map((index) => <GameCardSkeleton key={index} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}
