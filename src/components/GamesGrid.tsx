import { GameQuery, useGames } from "@/hooks/useGames"
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

interface Props {
  gamesQuery: GameQuery
}

export default function GamesGrid({ gamesQuery }: Props) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gamesQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <Box padding="10px">
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          data?.pages.map((page) =>
            page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))
          )}
      </SimpleGrid>
      <Button
        colorScheme="green"
        width="100%"
        mt={2}
        mb={4}
        onClick={() => fetchNextPage()}
        disabled={isLoading || !hasNextPage}
      >
        {isLoading ? "Loading" : "Load more...."}
      </Button>
    </Box>
  )
}
