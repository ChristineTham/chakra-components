import { Heading, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Table, Tr, Td } from '@chakra-ui/react'

import { getMenu, getDescription } from '../../lib/navitems'

export interface CardProps {
  children?: React.ReactNode
  heading: string
  menu: string
}

export const Card: React.FC<CardProps> = ({ children, heading, menu }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const menuitems = getMenu(menu)

  return (
    <article>
      <VStack spacing={4} px={8} py={4} rounded="lg" shadow="lg" bg={bg}>
        <Heading size="lg">{heading}</Heading>
        <Text>{getDescription(menu)}</Text>
        <Table>
          {menuitems?.map((item) => (
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
        {children}
      </VStack>
    </article>
  )
}
export default Card
