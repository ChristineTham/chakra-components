import {
  chakra,
  Center,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Button, FormControl, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'

export const Newsletter: React.FC = () => {
  const bg1 = useColorModeValue('white', 'gray.800')
  const bg2 = useColorModeValue('gray.700', 'gray.700')

  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      mx="auto"
      h={{ md: 48 }}
      maxW="4xl"
      rounded="lg"
      shadow="lg"
      overflow="hidden"
    >
      <Center bg={bg2}>
        <VStack spacing={2} p={6}>
          <Heading size="md" alignSelf="flex-start" color="white">
            Sign Up For <chakra.span color="purple.500">Project</chakra.span> Updates
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio
          </Text>
        </VStack>
      </Center>
      <Center bg={bg1}>
        <form>
          <FormControl id="email" p={6}>
            <InputGroup>
              <Input type="email" placeholder="Enter your email" />
              <InputRightAddon>
                <Button textTransform="uppercase" size="sm">
                  Subscribe
                </Button>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </form>
      </Center>
    </SimpleGrid>
  )
}
export default Newsletter
