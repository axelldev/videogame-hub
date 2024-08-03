import { HStack, ListItem, Skeleton } from "@chakra-ui/react"

export default function GenreItemSkeleton() {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton borderRadius={8} boxSize="32px" />
        <Skeleton borderRadius={8} width="100%" height={3} />
      </HStack>
    </ListItem>
  )
}
