import ExpandableText from "@/components/ExpandableText"
import GameAttributes from "@/components/GameAttributes"
import GameScreenshots from "@/components/GameScreenShots"
import GameTrailer from "@/components/GameTrailer"
import { useGameDetail } from "@/hooks/useGameDetail"
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

export default function GameDetailPage() {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGameDetail(slug)
  if (isLoading) return <Spinner />
  if (error || !game) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        {game.description_raw && <ExpandableText text={game.description_raw} />}
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <Box mb={5}>
          <GameTrailer gameId={game.id} />
        </Box>
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  )
}
