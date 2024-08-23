import ExpandableText from "@/components/ExpandableText"
import GameAttributes from "@/components/GameAttributes"
import GameTrailer from "@/components/GameTrailer"
import { useGameDetail } from "@/hooks/useGameDetail"
import { Heading, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

export default function GameDetailPage() {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGameDetail(slug)
  if (isLoading) return <Spinner />
  if (error || !game) throw error

  return (
    <>
      <Heading>{game.name}</Heading>
      {game.description_raw && <ExpandableText text={game.description_raw} />}
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  )
}
