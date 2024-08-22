import { useGames } from "@/hooks/useGames"
import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import InfiniteScroll from "react-infinite-scroll-component"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"

export default function GamesGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]

  const count =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  return (
    <Box padding="10px">
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={count}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={6}
          pt={5}
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
      </InfiniteScroll>
    </Box>
  )
}
