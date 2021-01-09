import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

export const AboutMe: React.FC = () => {
  const bg1 = useColorModeValue('gray.100', 'gray.900')
  const bg2 = useColorModeValue('white', 'gray.800')

  return (
    <section>
      <Center bg={bg1} py={{ base: 0, sm: 8, lg: 12 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          bg={bg2}
          mx={{ lg: 8 }}
          maxW={{ lg: '5xl' }}
          shadow={{ lg: 'lg' }}
          rounded={{ lg: 'lg' }}
        >
          <Image
            h={{ base: 64, lg: 'full' }}
            w={{ lg: 1 / 2 }}
            src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            rounded="lg"
          />

          <VStack
            py={12}
            px={6}
            spacing={4}
            maxW={{ base: 'xl', lg: '5xl' }}
            w={{ base: 'full', lg: 1 / 2 }}
            align="flex-start"
          >
            <Heading>
              Build Your New <em>Idea</em>
            </Heading>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit
              vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia
              iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
            </Text>

            <Button as="a" href="#">
              Start Now
            </Button>
          </VStack>
        </Flex>
      </Center>
    </section>
  )
}
export default AboutMe
