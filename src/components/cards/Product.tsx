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

export const Product: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  return (
    <section>
      <VStack maxW="xs" mx="auto" rounded="lg" shadow="md" overflow="hidden" bg={bg}>
        <VStack spacing={2} mx="auto" px={4} py={2} align="flex-start">
          <Heading as="a" href="#" size="md" textTransform="uppercase">
            Nike Air
          </Heading>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum
            facere recusandae voluptatibus
          </Text>
        </VStack>
        <Image
          w="full"
          h={48}
          fit="cover"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />
        <Flex bg="gray" w="full" align="center" px={4} py={1}>
          <Text fontWeight="bold">$129</Text>
          <Spacer />
          <Button size="xs" textTransform="uppercase">
            Add to Cart
          </Button>
        </Flex>
      </VStack>
    </section>
  )
}
export default Product
