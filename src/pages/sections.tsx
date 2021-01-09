import { Box, Divider, Heading } from '@chakra-ui/react'
import Navbar from '../components/navbars/MyNavbar'
import AboutMe from '../components/sections/AboutMe'
import Feature from '../components/sections/Feature'
import Team from '../components/sections/Team'
import SectionHead from '../components/sections/SectionHead'

const Heroes: React.FC = () => (
  <Box>
    <Navbar />
    <Heading as="h1" textAlign="center">
      Heroes
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

export default Heroes
