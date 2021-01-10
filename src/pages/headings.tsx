import { Box, Divider, Heading } from '@chakra-ui/react'
import Hero from '../components/heros/Hero'
import Hero1 from '../components/heros/Hero1'
import Hero2 from '../components/heros/Hero2'
import Hero3 from '../components/heros/Hero3'

const Heroes: React.FC = () => (
  <Box>
    <Heading as="h1" textAlign="center">
      Headings
    </Heading>
    <Divider p={2} />
    <Hero />
    <Divider p={2} />
    <Hero1 />
    <Divider p={2} />
    <Hero2 />
    <Divider p={2} />
    <Hero3 />
    <Divider p={2} />
  </Box>
)

export default Heroes
