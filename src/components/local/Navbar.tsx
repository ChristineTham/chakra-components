import {
  chakra,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'chakra-next-link'

import { HamburgerIcon } from '@chakra-ui/icons'

export const Navbar: React.FC = () => {
  const bg = useColorModeValue('pink.100', 'gray.700')
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <chakra.nav mb={10}>
      <HStack px={4} py={1} justify="space-between" pos="fixed" top={0} w="full" bg={bg}>
        <HStack spacing={4}>
          <Menu>
            <MenuButton
              display={{ base: 'block', md: 'none' }}
              as={IconButton}
              aria-label="Menu"
              icon={<HamburgerIcon />}
            />
            <MenuList>
              <MenuItem as={Link} href="/">
                Home
              </MenuItem>
              <MenuItem as={Link} href="/headings">
                Headings
              </MenuItem>
              <MenuItem as={Link} href="/sections">
                Sections
              </MenuItem>
              <MenuItem as={Link} href="/footers">
                Footers
              </MenuItem>
              <MenuItem as={Link} href="/about">
                About
              </MenuItem>
            </MenuList>
          </Menu>
          <Heading as="h1" size="md">
            Chakra Components
          </Heading>
          <Center h={8}>
            <Divider orientation="vertical" borderColor="purple.500" />
          </Center>
          <HStack display={{ base: 'none', md: 'block' }} spacing={3}>
            <Link href="/">Home</Link>
            <Link href="/headings">Headings</Link>
            <Link href="/sections">Sections</Link>
            <Link href="/footers">Footers</Link>
            <Link href="/about">About</Link>
          </HStack>
        </HStack>

        <Switch isChecked={isDark} onChange={toggleColorMode} colorScheme="purple" />
      </HStack>
    </chakra.nav>
  )
}
export default Navbar
