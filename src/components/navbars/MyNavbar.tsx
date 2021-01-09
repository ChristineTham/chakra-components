import { Heading, HStack, IconButton, Link } from '@chakra-ui/react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import { DarkModeSwitch } from '../DarkModeSwitch'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <HStack p={4} justify="space-between">
        <HStack spacing={4}>
          <Menu>
            <MenuButton
              display={{ base: 'block', md: 'none' }}
              as={IconButton}
              aria-label="Menu"
              icon={<HamburgerIcon />}
            />
            <MenuList>
              <MenuItem as="a" href="/">
                Home
              </MenuItem>
              <MenuItem as="a" href="/heroes">
                Heroes
              </MenuItem>
              <MenuItem as="a" href="/sections">
                Sections
              </MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Privacy</MenuItem>
            </MenuList>
          </Menu>
          <Heading as="h1" size="lg">
            Components
          </Heading>
        </HStack>

        <HStack display={{ base: 'none', md: 'block' }} spacing={3} mr={12}>
          <Link href="/">Home</Link>
          <Link href="/heroes">Heroes</Link>
          <Link href="/sections">Sections</Link>
          <Link href="#">Cards</Link>
          <Link href="#">About</Link>
        </HStack>
      </HStack>
      <DarkModeSwitch />
    </nav>
  )
}
export default Navbar
