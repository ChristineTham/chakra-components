import { Box, Button, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

export const Hero2: React.FC = () => {
  return (
    <section>
      <SimpleGrid columns={[1, 1, 2]} spacing={4} alignItems="center">
        <VStack maxW="xl" spacing={2} align="flex-start" px={6} py={12}>
          <Heading as="h1">
            Build Your New <em>Idea</em>
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab
            amet sunt recusandae? Reiciendis natus perspiciatis optio.
          </Text>
          <HStack spacing={2}>
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </HStack>
        </VStack>
        <Box
          minH="96"
          bgSize="cover"
          bgImage="url('https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80')"
        >
          <Box bg="black" opacity={0.25} />
        </Box>
      </SimpleGrid>
    </section>
  )
}
export default Hero2
