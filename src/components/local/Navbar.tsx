import {
  chakra,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

import { Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'chakra-next-link'

import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

type NavItemType = {
  name: string
  href?: string
  submenu?: NavItemType[]
}

export const Navbar: React.FC = () => {
  const bg = useColorModeValue('pink.100', 'gray.600')
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const navitems: NavItemType[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Static',
      submenu: [
        {
          name: 'Headers',
          href: '/headers',
        },
        {
          name: 'Sections',
          href: '/sections',
        },
        {
          name: 'Cards',
          href: '/cards',
        },
        {
          name: 'Forms',
          href: '/forms',
        },
        {
          name: 'Footers',
          href: '/footers',
        },
      ],
    },
    {
      name: 'Flexible',
      submenu: [
        {
          name: 'FlexHeader',
          href: '/flexheader',
        },
      ],
    },
  ]

  function displayMenu(menu: NavItemType[]): ReactNode {
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

  function displayNavbar(item: NavItemType): ReactNode {
    if (item.href) {
      return (
        <Button as={Link} variant="link" colorScheme="pink" href={item.href} key={item.name}>
          {item.name}
        </Button>
      )
    } else if (item.submenu) {
      return (
        <Menu key={item.name}>
          <MenuButton as={Button} variant="link" colorScheme="pink" rightIcon={<ChevronDownIcon />}>
            {item.name}
          </MenuButton>
          <MenuList>{displayMenu(item.submenu)}</MenuList>
        </Menu>
      )
    }

    return <Text key={item.name}>{item.name}</Text>
  }

  return (
    <chakra.nav mb={10}>
      <HStack px={4} py={1} justify="space-between" pos="fixed" top={0} w="full" bg={bg}>
        <HStack spacing={4}>
          <Menu>
            <MenuButton
              display={{ base: 'block', md: 'none' }}
              as={IconButton}
              aria-label="Menu"
              colorScheme="pink"
              icon={<HamburgerIcon />}
            />
            <MenuList>{displayMenu(navitems)}</MenuList>
          </Menu>
          <Heading as="h1" size="lg">
            Chakra Components
          </Heading>
          <Center display={{ base: 'none', md: 'block' }} h={8}>
            <Divider orientation="vertical" borderColor="purple.500" />
          </Center>
          <HStack display={{ base: 'none', md: 'block' }} spacing={5}>
            {navitems.map((item) => displayNavbar(item))}
          </HStack>
        </HStack>

        <Switch isChecked={isDark} onChange={toggleColorMode} colorScheme="purple" />
      </HStack>
    </chakra.nav>
  )
}
export default Navbar
