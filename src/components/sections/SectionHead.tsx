import { chakra, Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'

export const AboutMe: React.FC = () => {
  const bg1 = useColorModeValue('gray.100', 'gray.900')
  const bg2 = useColorModeValue('white', 'gray.800')
  const heading = useColorModeValue('gray.800', 'white')
  const text = useColorModeValue('gray.600', 'gray.400')
  const purple = useColorModeValue('purple.600', 'purple.400')

  return (
    <section>
      <Box bg={bg1} py={{ lg: 12 }} display={{ lg: 'flex' }} justifyContent={{ lg: 'center' }}>
        <Box
          bg={bg2}
          mx={{ lg: 8 }}
          display={{ lg: 'flex' }}
          maxW={{ lg: '5xl' }}
          shadow={{ lg: 'lg' }}
          rounded={{ lg: 'lg' }}
        >
          <Box w={{ lg: 1 / 2 }}>
            <Box
              h={{ base: 64, lg: 'full' }}
              bgImage="url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"
              rounded={{ lg: 'lg' }}
            ></Box>
          </Box>

          <Box py={12} px={6} maxW={{ base: 'xl', lg: '5xl' }} w={{ lg: 1 / 2 }}>
            <Heading fontSize={{ base: '2xl', md: '3xl' }} color={heading} fontWeight="bold">
              Build Your New <chakra.span color={purple}>Idea</chakra.span>
            </Heading>
            <Text mt={4} color={text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit
              vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia
              iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
            </Text>

            <Button as="a" href="#" mt={8} colorScheme="purple">
              Start Now
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  )
}
export default AboutMe
