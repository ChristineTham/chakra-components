import {
  chakra,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
  Stack,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react'

import { Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'chakra-next-link'

import { NavItem } from '../../lib/navitems'

import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

const exampleMenu: NavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    description: 'About this website.',
    href: '#',
  },
  {
    name: 'Blog',
    description: 'List of posts.',
    href: '#',
  },
  {
    name: 'Contact',
    description: 'Contact details.',
    href: '#',
  },
  {
    name: 'Submenu',
    description: 'Submenu',
    submenu: [
      {
        name: 'Item 1',
        description: 'Item #1.',
        href: '#',
      },
      {
        name: 'Item 2',
        description: 'Item #2.',
        href: '#',
      },
    ],
  },
]

export type NavbarPosition = 'left' | 'center' | 'right'

function displayNavbar(item: NavItem, colorScheme?: string): ReactNode {
  if (item.href) {
    return (
      <Button as={Link} variant="link" colorScheme={colorScheme} href={item.href} key={item.name}>
        {item.name}
      </Button>
    )
  } else if (item.submenu) {
    return (
      <Menu key={item.name}>
        <MenuButton
          as={Button}
          variant="link"
          colorScheme={colorScheme}
          rightIcon={<ChevronDownIcon />}
        >
          {item.name}
        </MenuButton>
        <MenuList>{displayMenu(item.submenu)}</MenuList>
      </Menu>
    )
  }

  return <Text key={item.name}>{item.name}</Text>
}

function displayMenu(menu: NavItem[]): ReactNode {
  return menu.map((item) => {
    if (item.href) {
      return (
        <MenuItem as={Link} href={item.href} key={item.name}>
          {item.name}
        </MenuItem>
      )
    } else if (item.submenu) {
      return (
        <MenuGroup title={item.name} key={item.name}>
          {displayMenu(item.submenu)}
        </MenuGroup>
      )
    }
    return <MenuItem key={item.name}>{item.name}</MenuItem>
  })
}

interface MobileMenuProps {
  menu: NavItem[]
  colorScheme?: string
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ menu, colorScheme }) => (
  <Menu>
    <MenuButton
      display={{ base: 'block', md: 'none' }}
      as={IconButton}
      aria-label="Menu"
      colorScheme={colorScheme}
      icon={<HamburgerIcon />}
    />
    <MenuList>{displayMenu(menu)}</MenuList>
  </Menu>
)

export const NavMenu: React.FC<{ menu: NavItem[]; colorScheme?: string }> = ({
  menu,
  colorScheme,
}) => (
  <HStack display={{ base: 'none', md: 'block' }} spacing={5}>
    {menu.map((item) => displayNavbar(item, colorScheme))}
  </HStack>
)

export const NavCategories: React.FC<{ menu: NavItem[]; colorScheme?: string }> = ({
  menu,
  colorScheme,
}) => (
  <>
    <Stack
      direction={['column', 'row']}
      p={2}
      spacing={5}
      mx="auto"
      mt={2}
      borderTop="1px"
      borderBottom="1px"
    >
      {menu.map((item) => displayNavbar(item, colorScheme))}
    </Stack>
  </>
)

export const NavLogo: React.FC<{ logo: string }> = ({ logo }) => (
  <Image w="auto" h={10} src={logo} alt="Logo" />
)

export const NavTitle: React.FC<{   children?: React.ReactNode; color?: string }> = ({ children, color }) => (
  <Heading as="h1" size="lg" color={color}>
    {children}
  </Heading>
)

export interface FlexNavbarProps {
  children?: React.ReactNode
  title?: string
  categories?: NavItem[]
  color?: string
  bg?: string
  colorScheme?: string
  menu?: NavItem[]
  logo?: string
  titlePos?: NavbarPosition
  menuPos?: NavbarPosition
  logoPos?: NavbarPosition
  childrenPos?: NavbarPosition
  fixed?: boolean
}

export const FlexNavbar: React.FC<FlexNavbarProps> = ({
  children,
  title,
  categories,
  color,
  bg,
  colorScheme,
  menu = exampleMenu,
  logo,
  titlePos = 'left',
  logoPos = 'left',
  menuPos = 'center',
  childrenPos = 'right',
  fixed,
}) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <chakra.nav {...(fixed && { mb: 10 })}>
      <Flex px={4} py={1} {...(fixed && { pos: 'fixed', top: 0 })} w="full" bg={bg}>
        <HStack spacing={4}>
          {menuPos === 'left' && <MobileMenu menu={menu} colorScheme={colorScheme} />}
          {logo && logoPos === 'left' && <NavLogo logo={logo} />}
          {titlePos === 'left' && <NavTitle color={color}>{title}</NavTitle>}
          {menuPos === 'left' && <NavMenu menu={menu} colorScheme={colorScheme} />}
          {childrenPos === 'left' && children}
        </HStack>

        <Spacer />

        <HStack spacing={4}>
          {menuPos === 'center' && <MobileMenu menu={menu} colorScheme={colorScheme} />}
          {logo && logoPos === 'center' && <NavLogo logo={logo} />}
          {titlePos === 'center' && <NavTitle color={color}>{title}</NavTitle>}
          {menuPos === 'center' && <NavMenu menu={menu} colorScheme={colorScheme} />}
          {childrenPos === 'center' && children}
        </HStack>

        <Spacer />

        <HStack spacing={4}>
          {menuPos === 'right' && <MobileMenu menu={menu} colorScheme={colorScheme} />}
          {logo && logoPos === 'right' && <NavLogo logo={logo} />}
          {titlePos === 'right' && <NavTitle color={color}>{title}</NavTitle>}
          {menuPos === 'right' && <NavMenu menu={menu} colorScheme={colorScheme} />}
          {childrenPos === 'right' && children}
          <Switch isChecked={isDark} onChange={toggleColorMode} colorScheme="purple" />
        </HStack>
      </Flex>
      {categories && (
        <Flex px={4} py={1} mx="auto" bg={bg}>
          <NavCategories menu={categories} colorScheme={colorScheme} />
        </Flex>
      )}
    </chakra.nav>
  )
}
export default FlexNavbar
