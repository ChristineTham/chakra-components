import {
  Button,
  Heading,
  Flex,
  HStack,
  Image,
  Spacer,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { StarIcon } from '@chakra-ui/icons'

export const ProductEval: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <article>
      <HStack maxW="md" mx="auto" rounded="lg" shadow="lg" overflow="hidden" bg={bg}>
        <Image
          w={1 / 3}
          fit="cover"
          src="https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="Backpack"
        />
        <VStack spacing={2} mx="auto" p={2} align="flex-start">
          <Heading as="a" href="#" size="md" textTransform="uppercase">
            Backpack
          </Heading>
          <Text fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</Text>
          <HStack>
            <StarIcon color="black" />
            <StarIcon color="black" />
            <StarIcon color="black" />
            <StarIcon color="gray.500" />
            <StarIcon color="gray.500" />
          </HStack>
          <Flex bg="gray" w="full" align="center">
            <Text fontWeight="bold">$129</Text>
            <Spacer />
            <Button size="xs" textTransform="uppercase">
              Add to Cart
            </Button>
          </Flex>
        </VStack>
      </HStack>
    </article>
  )
}
export default ProductEval
