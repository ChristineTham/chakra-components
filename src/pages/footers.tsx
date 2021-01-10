import { Box, Divider, Heading } from '@chakra-ui/react'
import SimpleFooter from '../components/footers/SimpleFooter'
import DetailFooter from '../components/footers/DetailFooter'
import CTAFooter from '../components/footers/CTAFooter'

const Heroes: React.FC = () => (
  <Box>
    <Heading as="h1" textAlign="center">
      Footers
    </Heading>
    <Divider p={2} />
    <SimpleFooter />
    <Divider p={2} />
    <DetailFooter />
    <Divider p={2} />
    <CTAFooter />
    <Divider p={2} />
  </Box>
)

export default Heroes
