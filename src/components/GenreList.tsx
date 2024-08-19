import { useGenres } from "@/hooks/useGenres"
import { useGameQueryStore } from "@/store/useGameQueryStore"
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react"
import GenreItemSkeleton from "./GenreItemSkeleton"

const skeletons = Array.from({ length: 10 }, (_, i) => i + 1)

export default function GenreList() {
  const { isLoading, genres, error } = useGenres()
  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore((store) => store.setGenreId)

  if (error) {
    return
  }

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((index) => <GenreItemSkeleton key={index} />)}
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
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}
