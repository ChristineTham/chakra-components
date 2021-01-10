import {
  Box,
  Container,
  Divider,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import Article from '../components/cards/Article'
import ArticleIcon from '../components/cards/ArticleIcon'
import ArticleImage from '../components/cards/ArticleImage'
import Product from '../components/cards/Product'
import ProductEval from '../components/cards/ProductEval'
import ProductSimple from '../components/cards/ProductSimple'
import Testimonial from '../components/cards/Testimonial'
import User from '../components/cards/User'
import UserDetail from '../components/cards/UserDetail'

const Index: React.FC = () => {
  const bg = useColorModeValue('pink.50', 'gray.700')
  const herobg = useColorModeValue('pink.100', 'gray.700')

  return (
    <Box bg={bg} pt={10}>
      <Container bg={herobg} p={6} rounded="lg" shadow="lg">
        <VStack spacing={4}>
          <Heading as="h1">Chakra Components</Heading>
          <Text>
            Written by{' '}
            <Link isExternal href="https://christham.gtsb.io" color="purple.500">
              Chris Tham
            </Link>{' '}
            (@chris1tham). Most of these components are inspired by the design of{' '}
            <Link isExternal href="https://merakiui.com" color="purple.500">
              MerakiUI
            </Link>
            , but rewritten in{' '}
            <Link isExternal href="https://chakra-ui.com" color="purple.500">
              Chakra-UI
            </Link>
            . There are also a few components based on other sources.
          </Text>
          <Text>
            This page contains a selection of cards, please clink on the other items on the top menu
            for examples of other components. Use the switch on the top right to toggle between
            Light and Dark modes.
          </Text>
        </VStack>
      </Container>
      <Box mt={8}>
        <Divider borderColor="pink.200" p={2} />
        <Article />
        <Divider borderColor="pink.200" p={2} />
        <ArticleIcon />
        <Divider borderColor="pink.200" p={2} />
        <ArticleImage />
        <Divider borderColor="pink.200" p={2} />
        <Product />
        <Divider borderColor="pink.200" p={2} />
        <ProductEval />
        <Divider borderColor="pink.200" p={2} />
        <ProductSimple />
        <Divider borderColor="pink.200" p={2} />
        <Testimonial />
        <Divider borderColor="pink.200" p={2} />
        <User />
        <Divider borderColor="pink.200" p={2} />
        <UserDetail />
        <Divider borderColor="pink.200" p={2} />
      </Box>
    </Box>
  )
}

export default Index
