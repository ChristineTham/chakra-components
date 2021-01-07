import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export const Team: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const heading = useColorModeValue('gray.800', 'white')
  const person = useColorModeValue('gray.700', 'gray.200')
  const position = useColorModeValue('gray.600', 'gray.300')

  return (
    <section>
      <Container px={6} py={6} mx="auto" bgColor={bg} maxW="7xl">
        <Heading
          color={heading}
          fontWeight="medium"
          fontSize={{ base: 'xl', md: '2xl' }}
          textTransform="capitalize"
        >
          Our Team
        </Heading>

        <Flex alignItems="center" justifyContent="center">
          <Grid
            gap={8}
            mt={8}
            gridTemplateColumns={{
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(4, 1fr)',
            }}
          >
            <Box maxW="xs" w="full" textAlign="center">
              <Image
                h={48}
                w="full"
                objectFit="cover"
                objectPosition="center"
                mx="auto"
                rounded="lg"
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                alt="avatar"
              />

              <Box mt={2}>
                <Heading as="h3" fontSize="lg" fontWeight="medium" color={person}>
                  Ahmed Omer
                </Heading>
                <Text mt={1} fontWeight="medium" color={position}>
                  CEO
                </Text>
              </Box>
            </Box>

            <Box maxW="xs" w="full" textAlign="center">
              <Image
                h={48}
                w="full"
                objectFit="cover"
                objectPosition="center"
                mx="auto"
                rounded="lg"
                src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <Box mt={2}>
                <Heading as="h3" fontSize="lg" fontWeight="medium" color={person}>
                  Jane Doe
                </Heading>
                <Text mt={1} fontWeight="medium" color={position}>
                  Co-founder
                </Text>
              </Box>
            </Box>

            <Box maxW="xs" w="full" textAlign="center">
              <Image
                h={48}
                w="full"
                objectFit="cover"
                objectPosition="center"
                mx="auto"
                rounded="lg"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />

              <Box mt={2}>
                <Heading as="h3" fontSize="lg" fontWeight="medium" color={person}>
                  Steve Ben
                </Heading>
                <Text mt={1} fontWeight="medium" color={position}>
                  UI/UX
                </Text>
              </Box>
            </Box>

            <Box maxW="xs" w="full" textAlign="center">
              <Image
                h={48}
                w="full"
                objectFit="cover"
                objectPosition="center"
                mx="auto"
                rounded="lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <Box mt={2}>
                <Heading as="h3" fontSize="lg" fontWeight="medium" color={person}>
                  Patterson Johnson
                </Heading>
                <Text mt={1} fontWeight="medium" color={position}>
                  Software Engineer
                </Text>
              </Box>
            </Box>
          </Grid>
        </Flex>
      </Container>
    </section>
  )
}
export default Team
