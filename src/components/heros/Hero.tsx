import { Box, Button, Link, Heading, Image, Text } from '@chakra-ui/react'

export const Hero: React.FC = () => {
  return (
    <section>
      <Box p={4} display={{ md: 'flex' }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 80 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Heading
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="3xl"
            letterSpacing="wide"
            color="purple.600"
          >
            Marketing
          </Heading>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can
            use to find your first customers.
          </Text>
          <Button colorScheme="purple" mt={4}>
            Shop Now
          </Button>
        </Box>
      </Box>
    </section>
  )
}
export default Hero
