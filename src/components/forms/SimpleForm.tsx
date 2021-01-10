import { Heading, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/react'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

export const SimpleForm: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <form>
      <VStack spacing={4} maxW="4xl" p={6} mx="auto" rounded="md" shadow="md" bg={bg}>
        <Heading size="lg">Account Settings</Heading>
        <SimpleGrid columns={2} gap={4} w="full">
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="password-confirmation">
            <FormLabel>Password confirmation</FormLabel>
            <Input type="password" />
          </FormControl>
        </SimpleGrid>
        <Button alignSelf="flex-end">Update Account Information</Button>
      </VStack>
    </form>
  )
}
export default SimpleForm
