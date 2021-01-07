import { Container } from '../components/Container'
import AboutMe from '../components/sections/AboutMe'
import Feature from '../components/sections/Feature'
import Team from '../components/sections/Team'
import SectionHead from '../components/sections/SectionHead'

const Index: React.FC = () => (
  <Container>
    <AboutMe />
    <Feature />
    <Team />
    <SectionHead />
  </Container>
)

export default Index
