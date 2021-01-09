import { Box, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'

export const Team: React.FC = () => {
  return (
    <section>
      <VStack spacing={8} px={6} py={6} mx="auto">
        <Heading textTransform="capitalize">Our Team</Heading>

        <SimpleGrid gap={8} columns={[2, 2, 3, 4]}>
          <VStack align="center">
            <Image
              h={48}
              w="full"
              objectFit="cover"
              objectPosition="center"
              rounded="lg"
              shadow="lg"
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
              alt="avatar"
            />
            <Box align="center">
              <Heading as="h3" size="base">
                Ahmed Omer
              </Heading>
              <Text fontSize="sm">CEO</Text>
            </Box>
          </VStack>

          <VStack align="center">
            <Image
              h={48}
              w="full"
              objectFit="cover"
              objectPosition="center"
              rounded="lg"
              shadow="lg"
              src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <Box align="center">
              <Heading as="h3" size="base">
                Jane Doe
              </Heading>
              <Text fontSize="sm">Co-founder</Text>
            </Box>
          </VStack>

          <VStack align="center">
            <Image
              h={48}
              w="full"
              objectFit="cover"
              objectPosition="center"
              rounded="lg"
              shadow="lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />
            <Box align="center">
              <Heading as="h3" size="base">
                Steve Ben
              </Heading>
              <Text fontSize="sm">UI/UX</Text>
            </Box>
          </VStack>

          <VStack align="center">
            <Image
              h={48}
              w="full"
              objectFit="cover"
              objectPosition="center"
              rounded="lg"
              shadow="lg"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <Box align="center">
              <Heading as="h3" size="base">
                Patterson Johnson
              </Heading>
              <Text fontSize="sm">Software Engineer</Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </section>
  )
}
export default Team
