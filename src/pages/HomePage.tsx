import GameHeading from "@/components/GameHeading"
import GamesGrid from "@/components/GamesGrid"
import GenreList from "@/components/GenreList"
import PlatformSelector from "@/components/PlatformSelector"
import SortSelector from "@/components/SortSelector"
import { Grid, Show, GridItem, HStack } from "@chakra-ui/react"

export default function HomePage() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading />
          <HStack spacing={5} mb={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GamesGrid />
        </GridItem>
      </Grid>
    </>
  )
}
