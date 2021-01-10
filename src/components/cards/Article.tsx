import {
  Avatar,
  Button,
  Heading,
  Flex,
  HStack,
  Link,
  Spacer,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export const Article: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <article>
      <VStack maxW="2xl" spacing={4} mx="auto" px={8} py={4} rounded="lg" shadow="md" bg={bg}>
        <Flex w="full" align="center">
          <Text fontWeight="light" fontSize="sm">
            2016-01-08
          </Text>
          <Spacer />
          <Button size="sm">Design</Button>
        </Flex>
        <Heading as="a" href="#" size="lg" color="purple.500">
          Accessibility tools for designers and developers
        </Heading>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam
          aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus
          delectus nihil quis facere in modi ratione libero!
        </Text>
        <Flex w="full" align="center">
          <Link color="purple.500">Read more</Link>
          <Spacer />
          <HStack spacing={4}>
            <Avatar src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" />
            <Text>Khatab wedaa</Text>
          </HStack>
        </Flex>
      </VStack>
    </article>
  )
}
export default Article
