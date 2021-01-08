import {
  chakra,
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  useColorMode,
} from '@chakra-ui/react'

import { HamburgerIcon, BellIcon } from '@chakra-ui/icons'

export const Navbar1: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <chakra.nav bg="gray.800" w="100vw">
      <Box maxW="7xl" mx="auto" px={{ base: 2, sm: 6, lg: 8 }}>
        <Flex position="relative" alignItems="center" justifyContent="space-between" h={16}>
          <Menu colorScheme="white">
            <MenuButton
              display={['block', 'none']}
              as={IconButton}
              colorScheme="purple"
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

          <Flex flex="1" alignItems={['center', 'stretch']} justifyContent={['center', 'start']}>
            <Flex flexShrink={0} alignItems="center">
              <Image
                display={{ base: 'block', lg: 'none' }}
                h={6}
                w="auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <Image
                display={{ base: 'none', lg: 'block' }}
                h={6}
                w="auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </Flex>
            <HStack display={['none', 'block']} spacing={4} ml={{ sm: 6 }}>
              <Link
                href="#"
                bg="gray.900"
                color="white"
                _hover={{}}
                rounded="md"
                fontWeight="medium"
              >
                Home
              </Link>
              <Link
                href="#"
                color="gray.300"
                _hover={{ color: 'white', bg: 'gray.700' }}
                px={3}
                py={2}
                rounded="md"
                fontWeight="medium"
              >
                About
              </Link>
              <Link
                href="#"
                color="gray.300"
                _hover={{ color: 'white', bg: 'gray.700' }}
                px={3}
                py={2}
                rounded="md"
                fontWeight="medium"
              >
                Blog
              </Link>
              <Link
                href="#"
                color="gray.300"
                _hover={{ color: 'white', bg: 'gray.700' }}
                px={3}
                py={2}
                rounded="md"
                fontWeight="medium"
              >
                Contact
              </Link>
              <Link
                href="#"
                color="gray.300"
                _hover={{ color: 'white', bg: 'gray.700' }}
                px={3}
                py={2}
                rounded="md"
                fontWeight="medium"
              >
                Privacy
              </Link>
            </HStack>
          </Flex>

          <Flex
            position={['absolute', 'static']}
            top={[0, 'auto']}
            right={[0, 'auto']}
            bottom={[0, 'auto']}
            alignItems="center"
            pr={[2, 0]}
            ml={{ sm: 6 }}
          >
            <IconButton colorScheme="white" aria-label="View notifications" icon={<BellIcon />} />

            <Menu>
              <MenuButton
                as={Avatar}
                colorScheme="white"
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
            <Switch color="white" isChecked={isDark} onChange={toggleColorMode} ml={4} />
          </Flex>
        </Flex>
      </Box>
    </chakra.nav>
  )
}
export default Navbar1
