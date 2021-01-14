import { Box, Heading, Text } from '@chakra-ui/react'

import Header from '../components/local/Header'
import Show from '../components/local/Show'
import { getDescription } from '../lib/navitems'

import FlexHeader from '../components/flexible/FlexHeader'

const FlexHeaders: React.FC = () => (
  <Box>
    <Header heading="Flexible Header" image="/images/click-here.svg">
      <Text>{getDescription('FlexHeader', 'Flexible')}</Text>
    </Header>
    <main>
      <Show
        heading="Default"
        description="By default, FlexHeader displays the current page name in a hero header."
        code={`<FlexHeader />`}
      >
        <FlexHeader />
      </Show>
      <Show
        heading="With Contents"
        description="If you put something in the body, it is will be displayed instead of the page name."
        code={`<FlexHeader>...</FlexHeader>`}
      >
        <FlexHeader>
          <Heading>Building a web site</Heading>
          <Text>You can put any content in a flexible header.</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="With NavItem"
        description="Insert a title that is a link, combined with content."
        code={`<FlexHeader title={{ name: 'Hello', href: '#' }}>...</FlexHeader>`}
      >
        <FlexHeader title={{ name: 'Hello', href: '#' }}>
          <Text>This is the content</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="With foreground colour"
        description="You can specify a colour for the title."
        code={`<FlexHeader title="..." color="color">...</FlexHeader>`}
      >
        <FlexHeader title={{ name: 'Hello', href: '#' }} color="purple.500">
          <Text>This is the content</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="With background colour"
        description="You can specify a background colour."
        code={`<FlexHeader bg="color">...</FlexHeader>`}
      >
        <FlexHeader bg="purple.200">
          <Heading>Building a web site</Heading>
          <Text>You can put any content in a flexible header.</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="With image"
        description="If you supply an image, the header will show it to the right of content by default."
        code={`<FlexHeader image="...">...</FlexHeader>`}
      >
        <FlexHeader image="/images/personal-site.svg">
          <Heading>Building a web site</Heading>
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Flip"
        description="You can also have the image on the left."
        code={`<FlexHeader image="..." flip>...</FlexHeader>`}
      >
        <FlexHeader image="/images/personal-site.svg" flip>
          <Heading>Building a web site</Heading>
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Background image"
        description="You can also have the image in the background."
        code={`<FlexHeader bgImage="url(...)">...</FlexHeader>`}
      >
        <FlexHeader bgImage="url('/images/featured-background.jpg')">
          <Heading>Building a web site</Heading>
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
      <Show
        heading="Background and image!"
        description="Why not have both?"
        code={`<FlexHeader image="..." bgImage="url(...)"><Text>...</Text></FlexHeader>`}
      >
        <FlexHeader
          image="/images/personal-site.svg"
          bgImage="url('/images/featured-background.jpg')"
        >
          <Heading>Building a web site</Heading>
          <Text>You can put any content in a flexible header</Text>
        </FlexHeader>
      </Show>
    </main>
  </Box>
)

export default FlexHeaders
