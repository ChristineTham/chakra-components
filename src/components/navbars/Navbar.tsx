import { Avatar, Heading, HStack, IconButton, Link, Switch, useColorMode } from '@chakra-ui/react'
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { HamburgerIcon, BellIcon } from '@chakra-ui/icons'

export const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

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
          <HStack display={{ base: 'none', md: 'block' }} spacing={3}>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy</Link>
          </HStack>
        </HStack>

        <HStack spacing={4}>
          <Popover>
            <PopoverTrigger>
              <IconButton aria-label="View notifications" icon={<BellIcon />} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Notifications</PopoverHeader>
              <PopoverBody>You have 65536 unread messages.</PopoverBody>
            </PopoverContent>
          </Popover>

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
      </HStack>
    </nav>
  )
}
export default Navbar
