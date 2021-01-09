import {
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

import { SiTwitter, SiLinkedin, SiFacebook, SiGithub } from 'react-icons/si'

export const AboutMe: React.FC = () => {
  return (
    <section>
      <SimpleGrid columns={[1, 1, 2]} spacing={4} alignItems="center" px={6} py={8} mx="auto">
        <VStack spacing={2} align="flex-start">
          <Heading>Who I am</Heading>
          <Text>
            Hi I am jane, software engineer <Link href="#">@BakaTeam</Link>, Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit
            corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
          </Text>
          <HStack spacing={2}>
            <IconButton as="a" href="#" aria-label="Twitter" icon={<SiTwitter />}>
              Twitter
            </IconButton>
            <IconButton as="a" href="#" aria-label="LinkedIn" icon={<SiLinkedin />}>
              LinkedIn
            </IconButton>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<SiFacebook />}>
              Facebook
            </IconButton>
            <IconButton as="a" href="#" aria-label="Github" icon={<SiGithub />}>
              Github
            </IconButton>
          </HStack>
        </VStack>

        <Center>
          <Image
            w="full"
            h={64}
            maxW="xl"
            rounded="md"
            shadow="lg"
            objectPosition="center"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Profile"
          />
        </Center>
      </SimpleGrid>
    </section>
  )
}
export default AboutMe
