import { Flex, Heading } from '@chakra-ui/react'

interface Props {
  title: string
}
export const Hero: React.FC<Props> = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
}
