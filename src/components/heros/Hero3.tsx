import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'

export const Hero3: React.FC = () => {
  return (
    <section>
      <Center
        minH="96"
        bgSize="cover"
        bgPosition="center"
        bgImage="url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
      >
        <VStack maxW="xl" spacing={2} align="flex-start">
          <Heading as="h1" color="white">
            Build Your New <em>Idea</em>
          </Heading>
          <Text color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab
            amet sunt recusandae? Reiciendis natus perspiciatis optio.
          </Text>
          <Button>Get Started</Button>
        </VStack>
      </Center>
    </section>
  )
}
export default Hero3
