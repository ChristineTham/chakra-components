import {
  Button,
  Heading,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { SiTwitter } from 'react-icons/si'
import { LinkIcon } from '@chakra-ui/icons'

export const ArticleIcon: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <section>
      <VStack
        maxW="sm"
        spacing={4}
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="md"
        align="flex-start"
        bg={bg}
      >
        <Flex w="full" align="center">
          <Text fontWeight="light" fontSize="sm">
            Courses and MOOCs
          </Text>
          <Spacer />
          <Button size="xs" textTransform="uppercase">
            Psychology
          </Button>
        </Flex>
        <Heading as="a" href="#" size="md" color="purple.500">
          AP® Psychology - Course 5: Health and Behavior
        </Heading>
        <Text fontSize="sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique
          exercitationem optio libero vitae accusamus cupiditate laborum eos.
        </Text>
        <Text>
          Visit on: <Link color="purple.500">edx.org</Link> or{' '}
          <Link color="purple.500">classcentral.com</Link>
        </Text>
        <HStack spacing={4} alignSelf="center">
          <IconButton aria-label="Twitter" icon={<SiTwitter />} />
          <IconButton aria-label="Link" icon={<LinkIcon />} />
        </HStack>
      </VStack>
    </section>
  )
}
export default ArticleIcon
