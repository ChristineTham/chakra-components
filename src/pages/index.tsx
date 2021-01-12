import { Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { Table, Tr, Td } from '@chakra-ui/react'
import { Link } from 'chakra-next-link'

import { getMenu, getDescription } from '../lib/navitems'

import Header from '../components/local/Header'
import Card from '../components/local/Card'

const Index: React.FC = () => {
  const staticMenu = getMenu('Static')
  const flexMenu = getMenu('Flexible')
  const bg = useColorModeValue('pink.50', 'gray.900')

  return (
    <Box>
      <Header heading="My Chakra Components" image="/images/personal-site.svg">
        <Text>
          Written by{' '}
          <Link isExternal href="https://christham.gtsb.io" color="purple.500">
            Chris Tham
          </Link>
          . Mostly inspired by the design of{' '}
          <Link isExternal href="https://merakiui.com" color="purple.500">
            MerakiUI
          </Link>
          , but rewritten in{' '}
          <Link isExternal href="https://chakra-ui.com" color="purple.500">
            Chakra-UI
          </Link>
          .
        </Text>
        <Text>Use the switch on the top right to toggle between Light and Dark modes.</Text>
        <Text>
          The source code for these components are available on GitHub in the{' '}
          <Link
            isExternal
            href="https://github.com/ChristineTham/chakra-components"
            color="purple.500"
          >
            chakra-components
          </Link>{' '}
          repository.
        </Text>
      </Header>
      <main>
        <SimpleGrid columns={[1, 1, 2]} gap={4} p={4} bg={bg}>
          <Card heading="Static Components">
            <Text>{getDescription('Static')}</Text>
            <Table>
              {staticMenu?.map((item) => (
                <Tr key={item.name}>
                  <Td>
                    <Link href={item.href}>
                      <Heading size="md" color="purple.500">
                        {item.name}
                      </Heading>
                    </Link>
                  </Td>
                  <Td>
                    <Text fontSize="sm">{item.description}</Text>
                  </Td>
                </Tr>
              ))}
            </Table>
          </Card>
          <Card heading="Flexible Components">
            <Text>{getDescription('Flexible')}</Text>
            <Table>
              {flexMenu?.map((item) => (
                <Tr key={item.name}>
                  <Td>
                    <Link href={item.href}>
                      <Heading size="md" color="purple.500">
                        {item.name}
                      </Heading>
                    </Link>
                  </Td>
                  <Td>
                    <Text fontSize="sm">{item.description}</Text>
                  </Td>
                </Tr>
              ))}
            </Table>
          </Card>
        </SimpleGrid>
      </main>
    </Box>
  )
}

export default Index
