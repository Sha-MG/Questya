import { EmailIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Center, HStack, Link, Stack, Text } from '@chakra-ui/react';

export default function LastStep() {
  return (
    <Stack spacing={2} textAlign='justify'>
      <Text fontWeight='bold'>Félicitations, vous y êtes.</Text>
      <Text>
        Vous vous avancez sur le sommet de la montagne, et vous apercevez un
        coffre en bois.
      </Text>
      <Text>
        Vous l&apos;ouvrez et y trouvez un parchemin précieusement conservé sur
        lequel vous pouvez lire plusieurs coordonnées :
      </Text>
      <Stack spacing={4} pl={4} my={6}>
        <HStack>
          <PhoneIcon />
          <Link href='tel:+33631934996'>06.31.93.49.96</Link>
        </HStack>
        <HStack>
          <EmailIcon />
          <Link href='mailto:morgane.gamory@gmail.com'>
            morgane.gamory@gmail.com
          </Link>
        </HStack>
        <HStack>
          <LinkIcon />
          <Link href='https://morgane-gamory.vercel.app/' isExternal>
            https://morgane-gamory.vercel.app/
          </Link>
        </HStack>
      </Stack>
      <Box my={4}>
        Ce sont celles, je l&apos;espère, de votre tant attendue perle rare.
        Créative, curieuse, polyvalente et optimiste, elle n&apos;attend que
        votre appel. Au fil de cette aventure, vous avez eu l&apos;opportunité
        de découvrir un aperçu de sa vie et de sa personnalité. J&apos;espère
        sincèrement que cette immersion vous donnera l&apos;envie de poursuivre
        l&apos;exploration.
      </Box>
      <Box mt={20}>
        <Text fontSize='sm' as='i'>
          Un grand merci d&apos;avoir parcouru cette aventure jusqu&apos;au
          bout. J&apos;espère que vous avez autant apprécié ce voyage que moi.
          Ce site et ses énigmes ont étés créés en deux jours dans le cadre
          d&apos;une offre d&apos;emploi. Pour toute question ou remarque, je
          reste à votre disposition.
        </Text>
      </Box>
      <Center>
        <Link href='/' fontSize='sm' textDecoration='underline'>
          Retour au début de l&apos;aventure.
        </Link>
      </Center>
    </Stack>
  );
}
