import { Button, Heading, SimpleGrid, VStack, Image, Text } from '@chakra-ui/react'

export const Hero1: React.FC = () => {
  return (
    <section>
      <SimpleGrid columns={[1, 1, 2]} spacing={4} mx="auto" px={6} py={12} alignItems="center">
        <VStack spacing={2} maxW="xl" alignItems="flex-start">
          <Heading as="h1">Best Place To Choose Your Clothes</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab
            amet sunt recusandae? Reiciendis natus perspiciatis optio.
          </Text>
          <Button>Shop Now</Button>
        </VStack>
        <Image maxW="2xl" w="full" src="/images/shopping.svg" alt="Online Shopping" />
      </SimpleGrid>
    </section>
  )
}
export default Hero1
