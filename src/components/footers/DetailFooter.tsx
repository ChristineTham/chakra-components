import {
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'

export const DetailFooter: React.FC = () => {
  const bg = useColorModeValue('gray.100', 'gray.800')

  return (
    <footer>
      <VStack spacing={4} w="full" align="center" px={6} py={4} bg={bg}>
        <Flex direction={['column', 'column', 'row']}>
          <VStack spacing={2} align="flex-start" w={{ base: 'full', lg: 2 / 5 }} mr={8}>
            <Heading size="lg">Brand</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.
            </Text>
            <HStack spacing={1}>
              <IconButton aria-label="Facebook" icon={<SiFacebook />}></IconButton>
              <IconButton aria-label="Twitter" icon={<SiTwitter />}></IconButton>
              <IconButton aria-label="LinkedIn" icon={<SiLinkedin />}></IconButton>
              <IconButton aria-label="Github" icon={<SiGithub />}></IconButton>
            </HStack>
          </VStack>
          <SimpleGrid columns={[2, 3, 3, 4]} w="full" gap={6} justifyContent="space-between">
            <VStack align="flex-start">
              <Heading size="sm" textTransform="uppercase">
                About
              </Heading>
              <Link fontSize="sm">Company</Link>
              <Link fontSize="sm">Community</Link>
              <Link fontSize="sm">Careers</Link>
            </VStack>
            <VStack align="flex-start">
              <Heading size="sm" textTransform="uppercase">
                Blog
              </Heading>
              <Link fontSize="sm">Tech</Link>
              <Link fontSize="sm">Music</Link>
              <Link fontSize="sm">Videos</Link>
            </VStack>
            <VStack align="flex-start">
              <Heading size="sm" textTransform="uppercase">
                Products
              </Heading>
              <Link fontSize="sm">Rosely</Link>
              <Link fontSize="sm">Ashley</Link>
              <Link fontSize="sm">Primula</Link>
            </VStack>
            <VStack align="flex-start">
              <Heading size="sm" textTransform="uppercase">
                Contact
              </Heading>
              <Link fontSize="sm">+1 555 123 4567</Link>
              <Link fontSize="sm">info@brand.com</Link>
            </VStack>
          </SimpleGrid>
        </Flex>
        <Divider borderColor="gray.500" mx="auto" />
        <Text fontSize="base">Copyright &copy; {new Date().getFullYear()} Brand, Inc.</Text>
      </VStack>
    </footer>
  )
}
export default DetailFooter
