import { useScreenshots } from "@/hooks/useScreenshots"
import { Image, SimpleGrid } from "@chakra-ui/react"

interface Props {
  gameId: number
}

export default function GameScreenshots({ gameId }: Props) {
  const { data, isLoading, error } = useScreenshots({ gameId })

  if (isLoading) return null
  if (error) throw error

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.data.results.map((file) => (
        <Image key={file.image} src={file.image} />
      ))}
    </SimpleGrid>
  )
}
