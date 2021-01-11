import { Box, Text } from '@chakra-ui/react'

import Header from '../components/local/Header'
import Show from '../components/local/Show'

import Hero from '../components/headings/Hero'
import Hero1 from '../components/headings/Hero1'
import Hero2 from '../components/headings/Hero2'
import Hero3 from '../components/headings/Hero3'
import FlexHeader from '../components/headings/FlexHeader'

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
      <Show
        heading="Flexible Header - default"
        description="The flexible header can display different styles depending on props. This is the default style."
        code={`<FlexHeader heading="any heading"><Text>content</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site">
          <Text>You can put any content in a flexible header.</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Flexible Header - foreground colour"
        description="You can specify a colour for the Heading."
        code={`<FlexHeader heading="any heading" color="color"><Text>content</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" color="purple.500">
          <Text>You can put any content in a flexible header.</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Flexible Header - background colour"
        description="You can specify a background colour."
        code={`<FlexHeader heading="any heading" bg="color"><Text>content</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" bg="purple.200">
          <Text>You can put any content in a flexible header.</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Flexible Header - with image"
        description="If you supply an image, the header will show it to the right of content by default."
        code={`<FlexHeader heading="any heading" image="..."><Text>content</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" image="/images/personal-site.svg">
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Flexible Header - flip image"
        description="You can also have the image on the left."
        code={`<FlexHeader heading="any heading" image="..." flip><Text>content</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" image="/images/personal-site.svg" flip>
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Flexible Header - background image"
        description="You can also have the image in the background."
        code={`<FlexHeader heading="any heading" bgImage="url(...)"><Text>content</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" bgImage="url('/images/featured-background.jpg')">
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Flexible Header - background and image!"
        description="Why not have both?"
        code={`<FlexHeader heading="any heading" image="..." bgImage="url(...)"><Text>content</Text></FlexHeader>`}
      >
        <FlexHeader
          heading="Building a web site"
          image="/images/personal-site.svg"
          bgImage="url('/images/featured-background.jpg')"
        >
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
    </main>
  </Box>
)

export default Headers
