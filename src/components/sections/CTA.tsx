import { chakra, Box, Flex, Heading, Link } from '@chakra-ui/react'

export const CTA: React.FC = () => {
  return (
    <Box bg="gray.50">
      <Box
        maxW="7xl"
        mx="auto"
        py={{ base: 12, lg: 16 }}
        px={{ base: 4, sm: 6, lg: 8 }}
        display={{ lg: 'flex' }}
        alignItems={{ lg: 'center' }}
        justifyContent={{ lg: 'space-between' }}
      >
        <Heading
          fontSize={{ base: '3xl', sm: '4xl' }}
          fontWeight="extrabold"
          letterSpacing="tight"
          color="gray.900"
        >
          <chakra.span>Ready to dive in?</chakra.span>
          <chakra.span color="purple.600">Start your free trial today.</chakra.span>
        </Heading>
        <Flex mt={{ base: 8, lg: 0 }} flexShrink={{ lg: 0 }}>
          <Box display="inline-flex" rounded="md" shadow="Base">
            <Link
              href="#"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="base"
              borderColor="transparent"
              layerStyle="base"
              fontSize="md"
              rounded="md"
              color="white"
              bg="purple.600"
              _hover={{ bg: 'purple.700' }}
            >
              Get started
            </Link>
          </Box>
          <Box display="inline-flex" ml={3} rounded="md" shadow="Base">
            <Link
              href="#"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="base"
              borderColor="transparent"
              layerStyle="base"
              fontSize="md"
              rounded="md"
              color="purple.600"
              bg="white"
              _hover={{ bg: 'purple.50' }}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
export default CTA
