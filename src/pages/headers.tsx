import { Box, Text } from '@chakra-ui/react'

import Header from '../components/local/Header'
import Show from '../components/local/Show'

import Hero from '../components/headings/Hero'
import Hero1 from '../components/headings/Hero1'
import Hero2 from '../components/headings/Hero2'
import Hero3 from '../components/headings/Hero3'

const Headers: React.FC = () => (
  <Box>
    <Header heading="Headers" image="/images/click-here.svg">
      <Text>Headers are prominent sections at the beginning of the web page.</Text>
    </Header>
    <main>
      <Show
        heading="Chakra-UI example"
        description="Example component from Chakra-UI documentation"
        code="<Hero />"
      >
        <Hero />
      </Show>
      <Show heading="Simple header" description="Adapted from MerakiUI" code="<Hero1 />">
        <Hero1 />
      </Show>
      <Show heading="Header with image" description="Adapted from MerakiUI" code="<Hero2 />">
        <Hero2 />
      </Show>
      <Show
        heading="Header with background"
        description="Adapted from MerakiUI - background opacity not working"
        code="<Hero3 />"
      >
        <Hero3 />
      </Show>
    </main>
  </Box>
)

export default Headers
