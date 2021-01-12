import { Box, Text } from '@chakra-ui/react'

import { getDescription } from '../lib/navitems'

import Header from '../components/local/Header'
import Show from '../components/local/Show'

import SimpleForm from '../components/forms/SimpleForm'
import Newsletter from '../components/forms/Newsletter'
import Login from '../components/forms/Login'

const Forms: React.FC = () => (
  <Box>
    <Header heading="Forms" image="/images/text-field.svg">
      <Text>{getDescription('Forms', 'Static')}</Text>
    </Header>
    <main>
      <Show bg heading="Simple Form" description="Adapted from MerakiUI" code="<SimpleForm />">
        <SimpleForm />
      </Show>
      <Show bg heading="Newsletter" description="Adapted from MerakiUI" code="<Newsletter />">
        <Newsletter />
      </Show>
      <Show bg heading="Login" description="Adapted from MerakiUI" code="<Login />">
        <Login />
      </Show>
    </main>
  </Box>
)

export default Forms
