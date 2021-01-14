import { Center, Heading, Link, Stack, VStack, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { NavItem } from '../../lib/navitems'

export interface FlexHeaderProps {
  title?: NavItem
  bg?: string
  color?: string
  image?: string
  bgImage?: string
  flip?: boolean
}

export const FlexHeader: React.FC<FlexHeaderProps> = ({
  children,
  title,
  color,
  bg,
  image,
  bgImage,
  flip,
}) => {
  const page = useRouter().pathname

  return (
    <section>
      <Center
        w="full"
        minH={64}
        px={6}
        py={12}
        bg={bg}
        bgSize="cover"
        bgPos="center"
        {...(bgImage && { bgImage: bgImage })}
      >
        <Stack
          direction={{ base: flip ? 'column-reverse' : 'column', md: flip ? 'row-reverse' : 'row' }}
          spacing={4}
          alignItems="center"
        >
          <VStack spacing={2} maxW="xl" w={{ md: image ? 1 / 2 : 'full' }} alignItems="flex-start">
            {title && title.href ? (
              <Link as={Heading} color={color} href={title.href}>
                {title.name}
              </Link>
            ) : (
              <Heading as="h1" color={color}>
                {title && title.name}
              </Heading>
            )}
            {!(title || children) && (
              <Heading as="h1" color={color}>
                {page.substr(1)}
              </Heading>
            )}
            {children}
          </VStack>
          {image && <Image maxW="2xl" w={{ md: 1 / 2 }} src={image} alt="Header Image" />}
        </Stack>
      </Center>
    </section>
  )
}
export default FlexHeader
