import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { BiHeadphone, BiBriefcaseAlt, BiMap, BiEnvelope } from 'react-icons/bi'

export const UserDetail: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <article>
      <Flex
        direction="column"
        maxW="sm"
        align="flex-start"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
        bg={bg}
      >
        <Image
          h={56}
          w="full"
          objectFit="cover"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />
        <HStack bg="gray.900" w="full" spacing={3} px={6} py={3}>
          <Icon as={BiHeadphone} h={6} w={6} color="white" />
          <Text color="white" fontSize="md" fontWeight="semibold">
            Focusing
          </Text>
        </HStack>
        <Box w="full" px={4} py={4}>
          <Heading as="h3" size="md">
            Patterson Johnson
          </Heading>
          <Text>
            Full Stack maker &amp; UI / UX Designer , love hip hop music Author of Building UI.
          </Text>
        </Box>
        <VStack spacing={4} px={4} align="flex-start" pb={4}>
          <HStack spacing={2}>
            <Icon as={BiBriefcaseAlt} h={6} w={6} />
            <Text fontSize="sm">Meraki UI</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={BiMap} h={6} w={6} />
            <Text fontSize="sm">California</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={BiEnvelope} h={6} w={6} />
            <Text fontSize="sm">patterson@example.com</Text>
          </HStack>
        </VStack>
      </Flex>
    </article>
  )
}
export default UserDetail
