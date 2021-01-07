import { Container } from '../components/Container'
import AboutMe from '../components/sections/AboutMe'
import CTA from '../components/sections/CTA'

const Index: React.FC = () => (
  <Container height="100vh">
    <AboutMe />
    <CTA />
  </Container>
)

export default Index
