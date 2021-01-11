import { Box, Text } from '@chakra-ui/react'

import Header from '../components/local/Header'
import Show from '../components/local/Show'

import AboutMe from '../components/sections/AboutMe'
import Feature from '../components/sections/Feature'
import Team from '../components/sections/Team'
import SectionHead from '../components/sections/SectionHead'

const Sections: React.FC = () => (
  <Box>
    <Header heading="Sections" image="/images/web-developer.svg">
      <Text>Sections are parts of the web page with a specific purpose and design.</Text>
    </Header>
    <main>
      <Show heading="About Me" description="Adapted from MerakiUI" code="<AboutMe />">
        <AboutMe />
      </Show>
      <Show heading="Feature" description="Adapted from MerakiUI" code="<Feature />">
        <Feature />
      </Show>
      <Show heading="Team" description="Adapted from MerakiUI" code="<Team />">
        <Team />
      </Show>
      <Show heading="Section Header" description="Adapted from MerakiUI" code="<SectionHead />">
        <SectionHead />
      </Show>
    </main>
  </Box>
)

export default Sections
