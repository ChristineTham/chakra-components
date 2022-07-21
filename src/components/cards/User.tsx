import { Box, Heading, Image, VStack, Text, useColorModeValue } from '@chakra-ui/react'

export const User: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <article>
      <VStack maxW="xs" align="center" shadow="lg" rounded="lg" overflow="hidden" mx="auto" bg={bg}>
        <Image
          h={56}
          w="full"
          objectFit="cover"
          objectPosition="center"
          rounded="lg"
          shadow="lg"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />
        <Box alignItems="center" p={4}>
          <Heading as="h3" size="md">
            John Doe
          </Heading>
          <Text fontSize="sm">Software Engineer</Text>
        </Box>
      </VStack>
    </article>
  )
}
export default User
