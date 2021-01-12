import { Heading, VStack, useColorModeValue } from '@chakra-ui/react'

export interface CardProps {
  heading: string
}

export const Card: React.FC<CardProps> = ({ children, heading }) => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <article>
      <VStack spacing={4} px={8} py={4} rounded="lg" shadow="lg" bg={bg}>
        <Heading size="lg">{heading}</Heading>
        {children}
      </VStack>
    </article>
  )
}
export default Card
