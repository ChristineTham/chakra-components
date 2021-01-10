import { Box, Divider, Heading, useColorModeValue } from '@chakra-ui/react'
import SimpleForm from '../components/forms/SimpleForm'
import Newsletter from '../components/forms/Newsletter'
import Login from '../components/forms/Login'

const Forms: React.FC = () => {
  const bg = useColorModeValue('pink.50', 'gray.700')
  const border = useColorModeValue('pink.200', 'gray.500')

  return (
    <Box bg={bg}>
      <Heading as="h1" textAlign="center" bg={bg} p={6}>
        Forms
      </Heading>
      <Divider p={2} mx="auto" borderColor={border} />
      <SimpleForm />
      <Divider p={2} mx="auto" borderColor={border} />
      <Newsletter />
      <Divider p={2} mx="auto" borderColor={border} />
      <Login />
      <Divider p={2} mx="auto" borderColor={border} />
    </Box>
  )
}

export default Forms
