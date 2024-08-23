import { Box, Heading } from "@chakra-ui/react"

interface Props {
  term: string
  children: React.ReactNode | React.ReactNode[]
}

export default function DefinitionItem({ term, children }: Props) {
  return (
    <Box my={5}>
      <Heading as="dt" fontSize="medium" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  )
}
