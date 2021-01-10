import { Box, Container, Heading, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'

const About: React.FC = () => {
  const bg = useColorModeValue('pink.50', 'gray.700')
  const herobg = useColorModeValue('pink.100', 'gray.700')

  return (
    <Box bg={bg} pt={10} h="100vh">
      <Container bg={herobg} p={6} rounded="lg" shadow="lg">
        <VStack spacing={4} align="flex-start">
          <Heading as="h1" alignSelf="center">
            About This Site
          </Heading>
          <Text>
            This site showcases example Chakra components (based on{' '}
            <Link isExternal href="https://merakiui.com" color="purple.500">
              MerakiUI
            </Link>{' '}
            but rewritten in{' '}
            <Link isExternal href="https://chakra-ui.com" color="purple.500">
              chakra-ui
            </Link>{' '}
            using the{' '}
            <Link isExternal href="https://nextjs.org" color="purple.500">
              NextJS
            </Link>{' '}
            framework and{' '}
            <Link isExternal href="https://reactjs.org" color="purple.500">
              React
            </Link>{' '}
            [React](https://reactjs.org). Written by{' '}
            <Link isExternal href="https://christham.gtsb.io" color="purple.500">
              Chris Tham
            </Link>{' '}
            .
          </Text>
          <Text>
            The components are written in{' '}
            <Link isExternal href="https://typescriptlang.org" color="purple.500">
              Typescript
            </Link>
            . The site is deployed on{' '}
            <Link isExternal href="https://vercel.com" color="purple.500">
              Vercel
            </Link>
            .
          </Text>
          <Heading size="lg">Privacy Notice</Heading>
          <Text>This site is a static web app, and does not collect personal information.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default About
