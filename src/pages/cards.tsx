import { Box, Text } from '@chakra-ui/react'

import Header from '../components/local/Header'
import Show from '../components/local/Show'

import Article from '../components/cards/Article'
import ArticleIcon from '../components/cards/ArticleIcon'
import ArticleImage from '../components/cards/ArticleImage'
import Product from '../components/cards/Product'
import ProductEval from '../components/cards/ProductEval'
import ProductSimple from '../components/cards/ProductSimple'
import Testimonial from '../components/cards/Testimonial'
import User from '../components/cards/User'
import UserDetail from '../components/cards/UserDetail'

const Index: React.FC = () => (
  <Box>
    <Header heading="Cards" image="/images/personal-site.svg">
      <Text>
        Card components are typically used to display blog articles, products, or any information
        that is repeated across the page.
      </Text>
    </Header>
    <main>
      <Show bg heading="Article" description="Adapted from MerakiUI" code="<Article />">
        <Article />
      </Show>
      <Show
        bg
        heading="Article with small Icons"
        description="Adapted from MerakiUI"
        code="<ArticleIcon />"
      >
        <ArticleIcon />
      </Show>
      <Show
        bg
        heading="Article with Image"
        description="Adapted from MerakiUI"
        code="<ArticleImage />"
      >
        <ArticleImage />
      </Show>
      <Show bg heading="Product" description="Adapted from MerakiUI" code="<Product />">
        <Product />
      </Show>
      <Show bg heading="ProductReview" description="Adapted from MerakiUI" code="<ProductEval />">
        <ProductEval />
      </Show>
      <Show
        bg
        heading="Simple Product"
        description="Adapted from MerakiUI"
        code="<ProductSimple />"
      >
        <ProductSimple />
      </Show>
      <Show bg heading="Testimonial" description="Adapted from MerakiUI" code="<Testimonial />">
        <Testimonial />
      </Show>
      <Show bg heading="User" description="Adapted from MerakiUI" code="<ProductEval />">
        <User />
      </Show>
      <Show
        bg
        heading="User with Details"
        description="Adapted from MerakiUI"
        code="<UserDetail />"
      >
        <UserDetail />
      </Show>
    </main>
  </Box>
)

export default Index
