import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Button, Input } from '@chakra-ui/react'

export const Login: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const bg2 = useColorModeValue('gray.200', 'gray.600')

  return (
    <form>
      <VStack spacing={4} maxW="sm" mx="auto" pt={4} rounded="md" shadow="md" bg={bg}>
        <Box align="center" px={4}>
          <Heading size="lg">Brand</Heading>
          <Heading size="md">
            <em>Welcome Back!</em>
          </Heading>
          <Text>Login or create account</Text>
        </Box>
        <VStack spacing={4} px={4} w="full">
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
        </VStack>
        <Flex w="full" align="center" px={4}>
          <Link color="purple.500">Forget password?</Link>
          <Spacer />
          <Button>Login</Button>
        </Flex>
        <Center bg={bg2} w="full" px={4} py={2}>
          <Text fontSize="sm">
            Don&apos;t have an account? <Link color="purple.500">Register</Link>
          </Text>
        </Center>
      </VStack>
    </form>
  )
}
export default Login
