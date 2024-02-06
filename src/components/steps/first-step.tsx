import { Box, Stack, Text } from '@chakra-ui/react';

import CustomButton from '../common/custom_button';

interface FirstStepProps {
  next: () => void;
  previous: () => void;
}

export default function FirstStep({ next, previous }: FirstStepProps) {
  return (
    <Stack spacing={4}>
      <Box>
        Dans une ruelle sombre et étroite, à l&apos;angle d&apos;une vieille
        bâtisse, se tient une silhouette encapuchonnée. Son visage est caché
        dans l&apos;ombre, mais ses yeux brillent d&apos;une lueur mystérieuse
        alors qu&apos;il attend patiemment.
      </Box>
      <Box fontWeight='medium' color='#807F79'>
        <Text as='span' textDecoration='underline'>
          L&apos;homme mystérieux :{' '}
        </Text>
        &quot; À vous, cher recruteur intrépide, s&apos;ouvre le seuil
        d&apos;une quête extraordinaire à la recherche de la candidate idéale.
        Mais avant de vous aventurer dans cette quête, permettez-moi de vous
        proposer mon aide. Par le passé, j&apos;ai arpenté le chemin que vous
        empruntez aujourd&apos;hui. J&apos;ai connu une carrière brillante, où
        tout semblait se dérouler à merveille. Tout, ou presque... Mon seul
        regret réside dans le fait de ne pas avoir donné leur chance aux profils
        atypiques, aux esprits novateurs, à ceux qui osent briser les
        conventions. Ces personnes, pourtant capables d&apos;apporter une
        richesse inestimable à une entreprise..&quot;
      </Box>
      <Box>
        Le vieux se tourne lentement vers vous, son regard semblant pénétrer
        votre âme. Dans sa main ridée, il tient une carte jaunie par le temps,
        ornée de symboles énigmatiques et de runes anciennes.
      </Box>
      <Box fontWeight='medium' color='#807F79'>
        <Text as='span' textDecoration='underline'>
          L&apos;homme mystérieux :{' '}
        </Text>
        &quot; Je comprends la raison de votre présence. Vous aspirez à dénicher
        une perle rare, une candidate qui saura non seulement vous étonner, mais
        aussi vous inspirer. Et je peux vous aider dans votre quête, si vous
        êtes prêt à sortir des sentiers battus. &quot;
      </Box>
      <Box>
        Vous êtes connu pour votre perspicacité et votre détermination. Votre
        réputation n&apos;est plus à faire dans le monde de l&apos;entreprise,
        mais vous savez que cette mission est différente. Vous avez soif de
        nouveauté, de créativité, vous savez que le monde de l&apos;escape game
        a besoin d&apos;un profil unique et vous êtes prêt à tout pour dénicher
        la candidate parfaite.
      </Box>
      <Box>
        Vous vous apprêtez à accepter l&apos;offre du vieux sage, conscient que
        cette carte pourrait bien être la clé de votre succès. Avec un léger
        frisson d&apos;excitation, vous vous engagez dans cette aventure pleine
        de promesses.
      </Box>
      <Box>Deux options s&apos;offrent maintenant à vous :</Box>
      <CustomButton action={next} text='Je suis prêt pour cette aventure.' />
      <CustomButton
        action={previous}
        text="J'ai oublié quelque chose avant de partir. Les grandes découvertes peuvent attendre les petites urgences. Revenez-nous dès que vous serez prêt !"
      />
    </Stack>
  );
}
