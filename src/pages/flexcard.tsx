import { Box, Heading, Text } from '@chakra-ui/react'

import Header from '../components/local/Header'
import Show from '../components/local/Show'
import { getDescription } from '../lib/navitems'

import FlexCard from '../components/flexible/FlexCard'

const FlexCards: React.FC = () => (
  <Box>
    <Header heading="Flexible Card" image="/images/click-here.svg">
      <Text>{getDescription('FlexCard', 'Flexible')}</Text>
    </Header>
    <main>
      <Show
        bg
        heading="Default"
        description="By default, FlexCard displays the contents of the children in a card."
        code={`<FlexCard>...</FlexCard>`}
      >
        <FlexCard>
          <Text>Hello World</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="With NavItem"
        description="Insert a title that is a link, combined with content."
        code={`<FlexCard title={{ name: 'Hello', href: '#' }}>...</FlexCard>`}
      >
        <FlexCard title={{ name: 'Hello', href: '#' }}>
          <Text>This is the content</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="With Badges"
        description="List of badges that are links"
        code={`<FlexCard badges={[{ name: 'Category', href: '#' }]}>...</FlexCard>`}
      >
        <FlexCard
          badges={[
            { name: 'Category', href: '#' },
            { name: 'Hello', href: '#' },
          ]}
        >
          <Text>This is the content</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="With Colorscheme for Badges"
        description="The badges can have a specific colour scheme."
        code={`<FlexCard badges={[{ name: 'Category', href: '#' }]} colorScheme="...">...</FlexCard>`}
      >
        <FlexCard
          badges={[
            { name: 'Category', href: '#' },
            { name: 'Hello', href: '#' },
          ]}
          colorScheme="purple"
        >
          <Text>This is the content</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="With foreground colour"
        description="You can specify a colour for the title."
        code={`<FlexCard title="..." color="color">...</FlexCard>`}
      >
        <FlexCard title={{ name: 'Hello', href: '#' }} color="purple.500">
          <Text>This is the content</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="With background colour"
        description="You can specify a background colour."
        code={`<FlexCard bg="color">...</FlexCard>`}
      >
        <FlexCard bg="purple.200">
          <Heading>Building a web site</Heading>
          <Text>You can put any content in a flexible header.</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="With image on top"
        description="If you supply an image, the header will show it on top of the card by default (can be changed)."
        code={`<FlexCard image="...">...</FlexCard>`}
      >
        <FlexCard title={{ name: 'Hello', href: '#' }} image="/images/personal-site.svg">
          <Text>This is the content</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="With image in middle"
        description="You can have the image in the middle."
        code={`<FlexCard image="..." imagePos="middle">...</FlexCard>`}
      >
        <FlexCard
          title={{ name: 'Hello', href: '#' }}
          image="/images/personal-site.svg"
          imagePos="middle"
        >
          <Text>This is the content</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="With image in bottom"
        description="You can have the image in the bottom."
        code={`<FlexCard image="..." imagePos="bottom">...</FlexCard>`}
      >
        <FlexCard
          title={{ name: 'Hello', href: '#' }}
          image="/images/personal-site.svg"
          imagePos="bottom"
        >
          <Text>This is the content</Text>
        </FlexCard>
      </Show>
      <Show
        bg
        heading="Full example"
        description="With title, badges, image and content."
        code={`<FlexCard ...>...</FlexCard>`}
      >
        <FlexCard
          title={{ name: 'Building a Web Site', href: '#' }}
          color="purple.500"
          bg="pink.100"
          image="/images/personal-site.svg"
          imagePos="middle"
          badges={[
            { name: 'Category', href: '#' },
            { name: 'Hello', href: '#' },
          ]}
          colorScheme="purple"
        >
          <Text>This is the content</Text>
        </FlexCard>
      </Show>
    </main>
  </Box>
)

export default FlexCards
