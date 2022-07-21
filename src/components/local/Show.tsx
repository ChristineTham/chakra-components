import { Box, Center, Divider, Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react'

export interface ShowProps {
  children?: React.ReactNode
  heading: string
  description: string
  code: string
  bg?: boolean
}

export const Show: React.FC<ShowProps> = ({ children, heading, description, code, bg }) => {
  const sectionbg = useColorModeValue('pink.50', 'gray.900')
  const codebg = useColorModeValue('pink.100', 'gray.600')
  const border = useColorModeValue('pink.200', 'gray.500')

  return (
    <VStack spacing={4} py={4}>
      <VStack bg={sectionbg} p={4} mx="auto">
        <Heading size="lg">{heading}</Heading>
        <Text>{description}</Text>
        <Center>
          <Text fontFamily="mono" mx="auto" p={4} bg={codebg} rounded="lg" shadow="lg">
            {code}
          </Text>
        </Center>
      </VStack>
      <Box border="1px" borderColor={border} w="full" {...(bg && { bg: sectionbg })}>
        {children}
      </Box>
      <Divider borderColor={border} p={2} alignSelf="center" />
    </VStack>
  )
}
export default Show
