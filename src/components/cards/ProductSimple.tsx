import {
  Button,
  Heading,
  Flex,
  Image,
  Spacer,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export const ProductSimple: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const bgGray = useColorModeValue('gray.200', 'gray.700')
  const colorInverse = useColorModeValue('gray.800', 'white')

  return (
    <section>
      <Flex direction="column" maxW="sm" mx="auto">
        <Image
          w="full"
          h={64}
          fit="cover"
          align="center"
          rounded="lg"
          shadow="lg"
          src="https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)"
          alt="Nike Revolt"
        />
        <VStack
          spacing={2}
          mx="auto"
          alignItems="center"
          mt={-10}
          bg={bg}
          w={{ base: 56, md: 64 }}
          rounded="lg"
          shadow="lg"
          overflow="hidden"
        >
          <Heading as="a" href="#" size="md" textTransform="uppercase" color={colorInverse} p={1}>
            Nike Revolt
          </Heading>
          <Flex w="full" align="center" bg={bgGray} p={1}>
            <Text fontWeight="bold">$129</Text>
            <Spacer />
            <Button
              size="xs"
              textTransform="uppercase"
              color="white"
              bg="gray.800"
              _hover={{ bg: 'gray.600' }}
            >
              Add to Cart
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </section>
  )
}
export default ProductSimple
