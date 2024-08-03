import { useGenres } from "@/hooks/useGenres"
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import GenreItemSkeleton from "./GenreItemSkeleton"

const skeletons = Array.from({ length: 10 }, (_, i) => i + 1)

export default function GenreList() {
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
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
