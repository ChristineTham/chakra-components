import { chakra, Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

export const Hero2: React.FC = () => {
  const heading = useColorModeValue('gray.800', 'white')
  const text = useColorModeValue('gray.500', 'gray.400')
  const purple = useColorModeValue('purple.600', 'purple.400')

  return (
    <section>
      <Box display={{ md: 'flex' }} w="100vw">
        <Flex
          alignItems="center"
          justifyContent="center"
          px={6}
          py={8}
          h={{ md: 96 }}
          w={{ base: 'full', md: 1 / 2 }}
        >
          <Box maxW="xl">
            <Heading
              as="h1"
              color={heading}
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="semibold"
            >
              Build Your New <chakra.span color={purple}>Idea</chakra.span>
            </Heading>
            <Text mt={2} color={text} fontSize={{ base: 'sm', md: 'base' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum
              ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
            </Text>
            <Button colorScheme="purple" mt={4}>
              Get Started
            </Button>
            <Button colorScheme="purple" variant="outline" mt={4} ml={4}>
              Learn More
            </Button>
          </Box>
        </Flex>

        <Box w={{ base: 'full', md: 1 / 2 }} h={{ base: 64, md: 'auto' }}>
          <Box
            h="full"
            w="full"
            bgImage="url('https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80')"
          >
            <Box h="full" w="full" bg="black" opacity={0.25}></Box>
          </Box>
        </Box>
      </Box>
    </section>
  )
}
export default Hero2
