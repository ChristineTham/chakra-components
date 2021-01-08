import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'

export const Hero1: React.FC = () => {
  const heading = useColorModeValue('gray.800', 'white')
  const text = useColorModeValue('gray.600', 'gray.400')

  return (
    <section>
      <Box mx="auto" px={6} py={16}>
        <Flex alignItems="center">
          <Box w={{ base: 'full', md: 1 / 2 }}>
            <Box maxW="lg">
              <Heading
                as="h1"
                color={heading}
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                textTransform="uppercase"
              >
                Best Place To Choose Your Clothes
              </Heading>
              <Text mt={2} color={text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum
                ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
              </Text>
              <Button colorScheme="purple" mt={4}>
                Shop Now
              </Button>
            </Box>
          </Box>

          <Flex
            alignItems="center"
            justifyContent="center"
            w={{ base: 'full', md: 1 / 2 }}
            mt={{ base: 6, md: 0 }}
          >
            <Image maxW="2xl" w="full" h="full" src="/images/shopping.svg" alt="hero-image" />
          </Flex>
        </Flex>
      </Box>
    </section>
  )
}
export default Hero1
