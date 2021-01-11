import { Center, Heading, Stack, VStack, Image } from '@chakra-ui/react'

export interface FlexHeaderProps {
  heading: string
  bg?: string
  image?: string
  bgImage?: string
  flip?: boolean
}

export const FlexHeader: React.FC<FlexHeaderProps> = ({
  children,
  heading,
  bg,
  image,
  bgImage,
  flip,
}) => {
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
          <VStack spacing={2} maxW="xl" alignItems="flex-start">
            <Heading as="h1">{heading}</Heading>
            {children}
          </VStack>
          {image && <Image maxW="2xl" w="full" src={image} alt="Header Image" />}
        </Stack>
      </Center>
    </section>
  )
}
export default FlexHeader
