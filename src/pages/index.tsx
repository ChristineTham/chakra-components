import { Box } from '@chakra-ui/react'
import Navbar from '../components/navbars/Navbar'
import Hero from '../components/heros/Hero'
import Hero1 from '../components/heros/Hero1'
import Hero2 from '../components/heros/Hero2'
import AboutMe from '../components/sections/AboutMe'
import Feature from '../components/sections/Feature'
import Team from '../components/sections/Team'
import SectionHead from '../components/sections/SectionHead'

const Index: React.FC = () => (
  <Box>
    <Navbar />
    <Hero />
    <Hero1 />
    <Hero2 />
    <AboutMe />
    <Feature />
    <Team />
    <SectionHead />
  </Box>
)

export default Index
