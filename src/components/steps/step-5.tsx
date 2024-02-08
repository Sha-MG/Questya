import { useState } from 'react';

import { Box, Center, Image, Stack, Text } from '@chakra-ui/react';

import CustomButton from '../common/custom_button';
import CustomInput from '../common/custom_input';
import Map from '../common/stepFive/map';

interface Step5Props {
  next: () => void;
}

export default function Step5({ next }: Step5Props) {
  const [validate, setValidate] = useState<boolean>(false);

  return (
    <Stack textAlign='justify' spacing={4}>
      <Box>
        Bien sûr, vous entrez dans une somptueuse bibliothèque… Le sol est pavé
        de couleurs vives, formant un patchwork multicolore sous vos pieds, vos
        doigts effleurent les reliures d’ouvrages anciens, votre nez frémit au
        parfum un peu poivré du papier, vous écarquillez les yeux dans la salle
        des sciences naturelles peuplées de curieux spécimens figés dans le
        temps, Un étrange sentiment de « déjà vu » s’empare de vous dans
        certaines salles, sans que vous parveniez à comprendre ce qui vous est
        si familier….
      </Box>
      <Image src='https://i.imgur.com/eRXWESU.jpeg' alt='bibliotheque' />
      <Box>
        Une carte (encore ! La demoiselle exagère…) semble vous attendre là.
        Elle représente, vous le comprenez vite, les pièces que vous venez de
        traverser. Vous tendez la main pour la saisir lorsque qu’une voix vous
        interpelle :
      </Box>
      <Box fontWeight='medium' color='#826651' fontFamily='diphylleia' my={4}>
        &quot;Je crains que cette carte ne doive rester à sa place, mon
        ami&quot;
      </Box>
      <Box>
        Vous vous tournez, surpris, vers un homme d&apos;âge mur dont la tenu
        vous fait dire qu&apos;il doit être majordome ici. Un peu impatient
        maintenant de découvrir la candidate, vous lui expliquez la partie de
        cache-cache dans laquelle vous êtes lancé. Saurait-il dans quelle pièce
        trouver la candidate ? Un sourire malicieux aux lèvres, il vous répond
        d&apos;un ton énigmatique :
      </Box>
      <Box fontWeight='medium' color='#826651' fontFamily='diphylleia'>
        &quot; Eh bien, vous voyez... Mes souvenirs sont parfois fugaces. Si
        vous retrouviez la technologie associée à la pièce que vous cherchez, je
        pourrais probablement vous aider. Voilà ce dont je me rappelle :
        <Box my={4}>
          <Text>- La salle n&apos;est pas trop éclairée.</Text>
          <Text>- Le JavaScript est un langage propice aux interactions.</Text>
          <Text>- La salle n&apos;a pas pour sujet des choses graphiques.</Text>
          <Text>
            - Elle contient des informations sur une technologie statique.
          </Text>
          <Text>- Elle communique avec React, mais pas avec Figma.</Text>
          <Text>- Illustrator, ou Ai, est un logiciel de graphisme.</Text>
        </Box>
      </Box>
      <Box>
        Muni de ces informations, vous vous penchez vers la carte afin de la
        regarder de plus près et de trouver la salle en question.
      </Box>
      <Map />
      <Box>
        Après de longues minutes d&apos;observation, vous vous retourner vers
        l&apos;homme, et lui annoncez que vous avez trouvé le nom de la salle :
      </Box>
      <CustomInput
        placeholder='Votre réponse'
        answer='HTML'
        indice1="Il est souvent associé à d'autres technologies web telles que CSS et JavaScript, mais il se concentre principalement sur la structure et le contenu des pages."
        indice2="C'est un langage de balisage utilisé pour créer et structurer le contenu des pages web."
        onValidation={() => setValidate(true)}
      />
      {validate && (
        <>
          <Box>
            L&apos;homme vous adresse un sourire satisfait, et vous tend un
            parchemin sur lequel est inscrit un message :
          </Box>
          <Stack as='i' color='#826651' fontFamily='diphylleia'>
            <Text>
              &quot;Bravo, cher recruteur ! Vous n&apos;avez jamais été aussi
              proche de votre but. Maintenant que vous avez exploré cette
              bibliothèque, vous en savez d&apos;avantage sur les connaissances
              de votre candidate. Votre prochaine destination vous attend : Le
              Domaine des inspirations.
            </Text>
            <Text>Ps: Alfred va vous emmener jusqu&apos;au domaine.&quot;</Text>
          </Stack>
          <Center>
            <CustomButton action={next} text='En avant Alfred' />
          </Center>
        </>
      )}
    </Stack>
  );
}
