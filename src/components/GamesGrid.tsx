import { GameQuery, useGames } from "@/hooks/useGames"
import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import InfiniteScroll from "react-infinite-scroll-component"

interface Props {
  gamesQuery: GameQuery
}

export default function GamesGrid({ gamesQuery }: Props) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gamesQuery)
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
