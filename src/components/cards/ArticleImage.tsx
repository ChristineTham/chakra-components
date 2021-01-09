import { Avatar, Heading, HStack, Image, VStack, Text, useColorModeValue } from '@chakra-ui/react'

export const ArticleImage: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <section>
      <VStack maxW="2xl" mx="auto" rounded="lg" shadow="md" overflow="hidden" bg={bg}>
        <Image
          w="full"
          h={64}
          fit="cover"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />
        <VStack spacing={4} mx="auto" p={6} align="flex-start">
          <Text fontWeight="bold" fontSize="sm" textTransform="uppercase">
            Product
          </Text>
          <Heading as="a" href="#" size="lg" color="purple.500">
            I Built A Successful Blog In One Year
          </Heading>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem
            ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In
            pretium nec senectus erat. Et malesuada lobortis.
          </Text>
          <HStack spacing={4}>
            <Avatar src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" />
            <Text>Khatab wedaa</Text>
            <Text fontSize="sm" fontWeight="light">
              2016-01-08
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </section>
  )
}
export default ArticleImage
