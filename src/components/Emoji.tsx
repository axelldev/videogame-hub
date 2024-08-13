import bullsEye from "@/assets/emojis/bulls-eye.webp"
import thumbsUp from "@/assets/emojis/thumbs-up.webp"
import meh from "@/assets/emojis/meh.webp"
import { Image, ImageProps, Tooltip } from "@chakra-ui/react"

interface Props {
  rating: number
}

export default function Emoji({ rating }: Props) {
  if (rating < 3) return

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  }

  const emoji = emojiMap[rating]

  return (
    <Tooltip label={emoji.alt}>
      <Image boxSize="25px" {...emoji} mt={3} />
    </Tooltip>
  )
}
