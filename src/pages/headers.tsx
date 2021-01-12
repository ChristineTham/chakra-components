import { Box, Text } from '@chakra-ui/react'

import { getDescription } from '../lib/navitems'

import Header from '../components/local/Header'
import Show from '../components/local/Show'

import Hero from '../components/headers/Hero'
import Hero1 from '../components/headers/Hero1'
import Hero2 from '../components/headers/Hero2'
import Hero3 from '../components/headers/Hero3'

const Headers: React.FC = () => (
  <Box>
    <Header heading="Headers" image="/images/click-here.svg">
      <Text>{getDescription('Headers', 'Static')}</Text>
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
