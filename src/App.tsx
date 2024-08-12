import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GamesGrid from "./components/GamesGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"
import { GameQuery } from "./hooks/useGames"

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    search: "",
  })

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(search) => {
            setGameQuery({ ...gameQuery, search })
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery((prev) => ({ ...prev, genre }))
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} mb={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => {
              setGameQuery((prev) => ({ ...prev, platform }))
            }}
          />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => {
              setGameQuery((prev) => ({ ...prev, sortOrder }))
            }}
          />
        </HStack>
        <GamesGrid gamesQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}
