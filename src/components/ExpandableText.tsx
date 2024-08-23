import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface Props {
  text: string
}

export default function ExpandableText({ text }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const limit = 300

  if (text.length <= limit) {
    return <Text>{text}</Text>
  }

  return (
    <Text>
      {isExpanded ? text : `${text.substring(0, limit)} ... `}
      <Button
        fontWeight="bold"
        colorScheme="yellow"
        size="xs"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  )
}
