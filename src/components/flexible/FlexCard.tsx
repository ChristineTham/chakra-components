import { Badge, Heading, HStack, Image, Link, VStack } from '@chakra-ui/react'
import { NavItem } from '../../lib/navitems'

export interface FlexCardProps {
  title?: NavItem
  color?: string
  bg?: string
  size?: string
  colorScheme?: string
  image?: string
  imagePos?: 'top' | 'middle' | 'bottom'
  badges?: NavItem[]
}
export const FlexCard: React.FC<FlexCardProps> = ({
  children,
  title,
  color,
  bg,
  size = '2xl',
  colorScheme,
  image,
  imagePos = 'top',
  badges,
}) => {
  return (
    <article>
      <VStack
        maxW={size}
        mx="auto"
        rounded="lg"
        shadow="md"
        overflow="hidden"
        bg={bg}
        align="center"
      >
        {image && imagePos === 'top' && (
          <Image w="full" h={64} fit="cover" src={image} alt="Card" />
        )}
        <VStack spacing={4} mx="auto" p={6} align="center">
          {badges && (
            <HStack spacing={1}>
              {badges.map((badge) => (
                <Badge key={badge.name} colorScheme={colorScheme}>
                  <Link href={badge.href}>{badge.name}</Link>
                </Badge>
              ))}
            </HStack>
          )}
          {title && (
            <Heading as="a" href={title.href} size="lg" color={color}>
              {title.name}
            </Heading>
          )}
          {image && imagePos === 'middle' && (
            <Image w="full" h={64} fit="cover" src={image} alt="Card" />
          )}
          {children}
        </VStack>
        {image && imagePos === 'bottom' && (
          <Image w="full" h={64} fit="cover" src={image} alt="Card" />
        )}
      </VStack>
    </article>
  )
}
export default FlexCard
