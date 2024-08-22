import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import placeHolderImage from "@/assets/image-placeholder.webp"
import Emoji from "./Emoji"
import { Game } from "@/entities/Game"
import { Link } from "react-router-dom"

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image ?? placeHolderImage} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  )
}
