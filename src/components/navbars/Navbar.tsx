import {
  chakra,
  Avatar,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Switch,
  useColorMode,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

export const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <chakra.nav>
      <Flex w="100vw" p={4}>
        <HStack spacing={4}>
          <Menu>
            <MenuButton
              display={{ base: 'block', md: 'none' }}
              as={IconButton}
              aria-label="Menu"
              icon={<HamburgerIcon />}
              size="sm"
            />
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Privacy</MenuItem>
            </MenuList>
          </Menu>
          <Heading as="h1" size="lg">
            Logo
          </Heading>
        </HStack>

        <Spacer />

        <HStack spacing={4}>
          <HStack display={{ base: 'none', md: 'block' }} spacing={3}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy</Link>
          </HStack>

          <Menu>
            <MenuButton
              as={Avatar}
              name="Open user menu"
              size="sm"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <MenuList>
              <MenuItem>Your Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Sign Out</MenuItem>
            </MenuList>
          </Menu>
          <Switch isChecked={isDark} onChange={toggleColorMode} />
        </HStack>
      </Flex>
    </chakra.nav>
  )
}
export default Navbar
