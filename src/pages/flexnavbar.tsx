import { Avatar, Box, Text } from '@chakra-ui/react'

import Header from '../components/local/Header'
import Show from '../components/local/Show'
import { getDescription, NavItem } from '../lib/navitems'

import FlexNavbar from '../components/flexible/FlexNavbar'

const categories: NavItem[] = [
  {
    name: 'Fashion',
    href: '#',
  },
  {
    name: 'Food',
    href: '#',
  },
  {
    name: 'Music',
    href: '#',
  },
  {
    name: 'Technology',
    href: '#',
  },
]

const FlexNavbars: React.FC = () => (
  <Box>
    <Header heading="Flexible Navbar" image="/images/click-here.svg">
      <Text>{getDescription('FlexNavbar', 'Flexible')}</Text>
    </Header>
    <main>
      <Show
        heading="Default"
        description="The flexible navbar can display different styles depending on props (all of which are optional). This is the default with no props."
        code={`<FlexNavbar />`}
      >
        <FlexNavbar />
      </Show>
      <Show
        heading="With Categories"
        description="The flexible navbar can an additional category menu below the main navbar."
        code={`<FlexNavbar categories={[...]} />`}
      >
        <FlexNavbar categories={categories} />
      </Show>
      <Show
        heading="Customised Title and color"
        description="You can specify your own Navbar title and colour"
        code={`<FlexNavbar title="..." color="..."/>`}
      >
        <FlexNavbar title="Hello" color="purple.500" />
      </Show>
      <Show
        heading="Navigation items"
        description="You provide navigation links via a NavItem[] JSON that can contain submenus."
        code={`<FlexNavbar menu={[{ name: 'Menu1', href: '#' }, { name: 'Menu2', href : '#' }]} />`}
      >
        <FlexNavbar
          menu={[
            { name: 'Menu1', href: '#' },
            { name: 'Menu2', href: '#' },
          ]}
        />
      </Show>
      <Show
        heading="Background colour"
        description="Insert an optional background color"
        code={`<FlexNavbar bg="purple.100" />`}
      >
        <FlexNavbar bg="purple.100" />
      </Show>
      <Show
        heading="Colour Scheme"
        description="Specify a colour scheme."
        code={`<FlexNavbar colorScheme="purple" />`}
      >
        <FlexNavbar colorScheme="purple" />
      </Show>
      <Show
        heading="Logo"
        description="Specify an image file as a logo."
        code={`<FlexNavbar logo="..." />`}
      >
        <FlexNavbar logo="/images/rosely.svg" />
      </Show>
      <Show
        heading="Custom Elements"
        description="You can specify additional elements in the body of the component.  By default, these will appear in the right (but you can change this)."
        code={`<FlexNavbar><Avatar /></FlexNavbar>`}
      >
        <FlexNavbar>
          <Avatar />
        </FlexNavbar>
      </Show>
      <Show
        heading="Reposition Elements"
        description="You can move any of the following to the left, centre or right part of the navbar (title, logo, menu, children)."
        code={`<FlexNavbar titlePos="center" logoPos="center" menuPos="left" childrenPos="right"><Avatar /></FlexNavbar>`}
      >
        <FlexNavbar
          title="Hello World"
          titlePos="center"
          logoPos="center"
          menuPos="left"
          childrenPos="right"
          logo="/images/rosely.svg"
        >
          <Avatar />
        </FlexNavbar>
      </Show>
      <Show
        heading="Fixed position"
        description="Stick the navbar to the top of the screen by specifying 'fixed'. Note: this is not enabled in the example below because there is already a fixed position navbar on this page."
        code={`<FlexNavbar fixed />`}
      >
        <FlexNavbar title="Always on top" />
      </Show>
    </main>
  </Box>
)

export default FlexNavbars
