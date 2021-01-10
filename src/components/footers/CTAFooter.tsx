import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'

export const CTAFooter: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <footer>
      <VStack spacing={4} w="full" align="center" px={6} py={4} bg={bg}>
        <Container py={6}>
          <Heading size="lg" mb={4}>
            Join 31,000+ others and never miss out on new tips, tutorials, and more.
          </Heading>
          <InputGroup>
            <InputRightElement w={24}>
              <Button colorScheme="purple" size="xs" textTransform="uppercase">
                Subscribe
              </Button>
            </InputRightElement>
            <Input type="email" placeholder="Enter your email" />
          </InputGroup>
        </Container>
        <Divider mx="auto" />
        <Flex w="full">
          <Heading size="md">Brand</Heading>
          <Spacer />
          <HStack spacing={4}>
            <Link fontSize="sm">About</Link>
            <Link fontSize="sm">Blog</Link>
            <Link fontSize="sm">News</Link>
            <Link fontSize="sm">Contact</Link>
          </HStack>
        </Flex>
      </VStack>
    </footer>
  )
}
export default CTAFooter
