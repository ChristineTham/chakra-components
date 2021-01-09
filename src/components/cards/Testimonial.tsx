import { Circle, Heading, Flex, Image, VStack, Text, useColorModeValue } from '@chakra-ui/react'

export const Testimonial: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <section>
      <Flex direction="column" maxW="md" mx="auto" mt={4}>
        <Circle
          size={16}
          border="2px"
          borderColor="gray.500"
          alignSelf="flex-end"
          overflow="hidden"
          mr={8}
          zIndex={1}
        >
          <Image
            fit="cover"
            align="center"
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </Circle>
        <VStack
          spacing={2}
          alignItems="flex-start"
          py={4}
          px={8}
          mt={-8}
          rounded="lg"
          shadow="lg"
          overflow="hidden"
          bg={bg}
        >
          <Heading as="a" href="#" size="md">
            Design Tools
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea
            doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a
            veritatis pariatur minus consequuntur!
          </Text>
          <Text fontWeight="bold" color="purple.500" alignSelf="flex-end">
            John Doe
          </Text>
        </VStack>
      </Flex>
    </section>
  )
}
export default Testimonial
