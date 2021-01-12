import { Box, Text } from '@chakra-ui/react'

import Header from '../components/local/Header'
import Show from '../components/local/Show'

import FlexHeader from '../components/headings/FlexHeader'

const Headers: React.FC = () => (
  <Box>
    <Header heading="Flexible Header" image="/images/click-here.svg">
      <Text>
        The FlexHeader component has different customisable looks based on optional props.
      </Text>
    </Header>
    <main>
      <Show
        heading="Default"
        description="The flexible header can display different styles depending on props. This is the default style."
        code={`<FlexHeader heading="..."><Text>...</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site">
          <Text>You can put any content in a flexible header.</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="With foreground colour"
        description="You can specify a colour for the Heading."
        code={`<FlexHeader heading="..." color="color"><Text>...</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" color="purple.500">
          <Text>You can put any content in a flexible header.</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="With background colour"
        description="You can specify a background colour."
        code={`<FlexHeader heading="..." bg="color"><Text>...</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" bg="purple.200">
          <Text>You can put any content in a flexible header.</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="With image"
        description="If you supply an image, the header will show it to the right of content by default."
        code={`<FlexHeader heading="..." image="..."><Text>...</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" image="/images/personal-site.svg">
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Flip"
        description="You can also have the image on the left."
        code={`<FlexHeader heading="..." image="..." flip><Text>...</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" image="/images/personal-site.svg" flip>
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Background image"
        description="You can also have the image in the background."
        code={`<FlexHeader heading="..." bgImage="url(...)"><Text>...</Text></FlexHeader>`}
      >
        <FlexHeader heading="Building a web site" bgImage="url('/images/featured-background.jpg')">
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Background and image!"
        description="Why not have both?"
        code={`<FlexHeader heading="..." image="..." bgImage="url(...)"><Text>...</Text></FlexHeader>`}
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
