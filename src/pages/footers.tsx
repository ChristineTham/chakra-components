import { Box, Text } from '@chakra-ui/react'

import { getDescription } from '../lib/navitems'

import Header from '../components/local/Header'
import Show from '../components/local/Show'

import SimpleFooter from '../components/footers/SimpleFooter'
import DetailFooter from '../components/footers/DetailFooter'
import CTAFooter from '../components/footers/CTAFooter'

const Footers: React.FC = () => (
  <Box>
    <Header heading="Footers" image="/images/browser-stats.svg">
      <Text>{getDescription('Footers', 'Static')}</Text>
    </Header>
    <main>
      <Show heading="Simple Footer" description="Adapted from MerakiUI" code="<SimpleFooter />">
        <SimpleFooter />
      </Show>
      <Show heading="Detail Footer" description="Adapted from MerakiUI" code="<DetailFooter />">
        <DetailFooter />
      </Show>
      <Show
        heading="Call to Action Footer"
        description="Adapted from MerakiUI"
        code="<CTAFooter />"
      >
        <CTAFooter />
      </Show>
    </main>
  </Box>
)

export default Footers
