import { Heading, SimpleGrid, VStack, Image, useColorModeValue } from '@chakra-ui/react'

export interface HeadingProps {
  children?: React.ReactNode
  heading: string
  image: string
}

export const Header: React.FC<HeadingProps> = ({ children, heading, image }) => {
  const bg = useColorModeValue('pink.50', 'gray.700')

  return (
    <section>
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing={4}
        mx="auto"
        px={6}
        py={12}
        alignItems="center"
        bg={bg}
      >
        <VStack spacing={2} maxW="xl" alignItems="flex-start">
          <Heading as="h1">{heading}</Heading>
          {children}
        </VStack>
        <Image maxW="2xl" w="full" maxH={64} src={image} alt="Header Image" />
      </SimpleGrid>
    </section>
  )
}
export default Header
