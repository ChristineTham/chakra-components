import { Box, Divider, Heading } from '@chakra-ui/react'
import AboutMe from '../components/sections/AboutMe'
import Feature from '../components/sections/Feature'
import Team from '../components/sections/Team'
import SectionHead from '../components/sections/SectionHead'

const Sections: React.FC = () => (
  <Box>
    <Heading as="h1" textAlign="center" p={6}>
      Sections
    </Heading>
    <Divider p={2} />
    <AboutMe />
    <Divider p={2} />
    <Feature />
    <Divider p={2} />
    <Team />
    <Divider p={2} />
    <SectionHead />
    <Divider p={2} />
  </Box>
)

export default Sections
