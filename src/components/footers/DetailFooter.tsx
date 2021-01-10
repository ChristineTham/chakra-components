import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'

export const DetailFooter: React.FC = () => {
  const bg = useColorModeValue('gray.100', 'gray.800')

  return (
    <footer>
      <Flex direction={['column', 'column', 'row']} w="full" px={6} align="center" bg={bg}>
        <Heading size="md">Brand</Heading>
        <Spacer />
        <Text fontSize="sm">Copyright &copy; {new Date().getFullYear()} Brand, Inc.</Text>
        <Spacer />
        <HStack spacing={1}>
          <IconButton aria-label="Facebook" icon={<SiFacebook />}></IconButton>
          <IconButton aria-label="Twitter" icon={<SiTwitter />}></IconButton>
          <IconButton aria-label="LinkedIn" icon={<SiLinkedin />}></IconButton>
          <IconButton aria-label="Github" icon={<SiGithub />}></IconButton>
        </HStack>
      </Flex>
    </footer>
  )
}
export default DetailFooter
