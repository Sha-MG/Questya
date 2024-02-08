import { Box, Stack } from '@chakra-ui/react';

import CustomButton from '../common/custom_button';

interface FirstStepProps {
  next: () => void;
  previous: () => void;
}

export default function FirstStep({ next, previous }: FirstStepProps) {
  return (
    <Stack spacing={4}>
      <Box>
        Dans une ruelle, à l&apos;angle d&apos;une vieille bâtisse, se tient une
        silhouette encapuchonnée. Son visage est caché dans l&apos;ombre, mais
        ses yeux brillent d&apos;une lueur mystérieuse alors qu&apos;il attend
        patiemment.
      </Box>
      <Box fontWeight='medium' color='#826651' fontFamily='diphylleia' my={4}>
        &quot; Cher recruteur intrépide, vous voici à l’orée d’une quête
        difficile à la recherche de la candidate idéale. Permettez-moi de vous
        proposer mon aide car par le passé, j&apos;ai moi aussi arpenté le
        chemin des Recruteurs, j&apos;ai louvoyé dans la Mer des CV et me suis
        parfois perdu dans la Jungle des profils. Heureusement j&apos;ai su
        m&apos;entourer d&apos;esprits agiles, novateurs, aux profils parfois
        atypiques qui ont fait la richesse de mon entreprise.&quot;
      </Box>
      <Box>
        Le vieux se tourne lentement vers vous, son regard semblant pénétrer
        votre âme. Dans sa main ridée, il tient une carte jaunie par le temps,
        ornée de symboles énigmatiques et de runes anciennes.
      </Box>
      <Box fontWeight='medium' color='#826651' fontFamily='diphylleia' my={4}>
        &quot; Vous aspirez sûrement à dénicher La Perle Rare, la candidate qui
        saura non seulement vous écouter, comprendre vos souhaits mais peut être
        aussi vous étonner... Je peux vous aider dans votre quête, si vous êtes
        prêt à sortir des sentiers battus. &quot;
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
        text="J'ai oublié quelque chose avant de partir. Les grandes découvertes peuvent attendre les petites urgences. Revenez dès que vous serez prêt !"
      />
    </Stack>
  );
}
