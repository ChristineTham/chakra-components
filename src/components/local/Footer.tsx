import {
  chakra,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'

export const Footer: React.FC = () => {
  const bg = useColorModeValue('pink.100', 'gray.600')

  return (
    <chakra.footer mt={10}>
      <Flex
        direction={['column', 'column', 'row']}
        pos="fixed"
        bottom={0}
        w="full"
        px={6}
        py={1}
        align="center"
        bg={bg}
      >
        <Heading size="md">Chakra Components</Heading>
        <Spacer />
        <Text fontSize="sm">
          Copyright &copy; {new Date().getFullYear()}{' '}
          <Link color="purple.500" isExternal href="https://hellotham.com">
            Hello Tham Pty Ltd
          </Link>
          , MIT License
        </Text>
        <Spacer />
        <HStack spacing={1}>
          <IconButton
            as={Link}
            isExternal
            href="https://facebook.com/hellothamcom"
            aria-label="Facebook"
            colorScheme="purple"
            size="sm"
            variant="outline"
            icon={<SiFacebook />}
          ></IconButton>
          <IconButton
            as={Link}
            isExternal
            href="https://twitter.com/hellothamcom"
            aria-label="Twitter"
            colorScheme="purple"
            size="sm"
            variant="outline"
            icon={<SiTwitter />}
          ></IconButton>
          <IconButton
            as={Link}
            isExternal
            href="https://linkedin.com/company/hellotham"
            aria-label="LinkedIn"
            colorScheme="purple"
            size="sm"
            variant="outline"
            icon={<SiLinkedin />}
          ></IconButton>
          <IconButton
            as={Link}
            isExternal
            href="https://github.com/hellotham"
            aria-label="Github"
            colorScheme="purple"
            size="sm"
            variant="outline"
            icon={<SiGithub />}
          ></IconButton>
        </HStack>
      </Flex>
    </chakra.footer>
  )
}
export default Footer
