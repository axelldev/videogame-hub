import { Genre, useGenres } from "@/hooks/useGenres"
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react"
import GenreItemSkeleton from "./GenreItemSkeleton"

const skeletons = Array.from({ length: 10 }, (_, i) => i + 1)

interface Props {
  selectedGenre: Genre | null
  onSelectGenre: (genre: Genre) => void
}

export default function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { isLoading, genres, error } = useGenres()

  if (error) {
    return
  }

  return (
    <List>
      {isLoading && skeletons.map((index) => <GenreItemSkeleton key={index} />)}
      {genres?.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={genre.image_background}
            />
            <Button
              fontSize="large"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(genre)}
              isTruncated
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
