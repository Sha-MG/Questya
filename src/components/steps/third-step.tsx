import { Box, HStack, Stack } from '@chakra-ui/react';

import Answer from '../common/ThirdStep/answers';
import Path from '../common/ThirdStep/path';

interface ThirdStepProps {
  next: () => void;
}

export default function ThirdStep({ next }: ThirdStepProps) {
  return (
    <Stack spacing={4} textAlign='justify'>
      <Box>
        Vous voici à destination. Dès les premiers pas dans ce jardin enchanté,
        vous êtes enveloppé par une sensation de bien-être. Le soleil caresse
        votre peau, de l’eau murmure tout près, en réponse aux chants des
        oiseaux. Vous vous glissez sous les arbres, attiré par les massifs de
        fleurs colorés et… votre regard se pose sur une étonnante chapelle.
      </Box>
      <Box
        w='full'
        my={4}
        bgImage='https://i.imgur.com/AnoLw80.jpeg'
        h='350px'
        bgPosition='center'
        bgSize='cover'
      />
      <Box>
        Intrigué, vous vous approchez avec l&apos;espoir de découvrir ce
        qu&apos;il renferme. Cependant, à votre grande déception, la porte est
        solidement fermée. Vous alliez renoncer et faire demi-tour lorsque…
        votre regard s’attarde sur un petit boîtier métallique, presque
        dissimulé sur le côté de la porte. Une lueur d&apos;espoir naît en vous
        : ce clavier peut sûrement vous faire entrer !
      </Box>
      <Box>
        {' '}
        Mais… comme vous vous en doutez sans doute déjà une énigme vous attend…
        Il faut saisir trois mots pour déverrouiller la porte. Vous vous
        détournez de la porte en réfléchissant et remarquez que le jardin compte
        trois zones distinctes :
      </Box>

      <HStack spacing={0} my={10}>
        <Path
          url='https://i.imgur.com/FAruwpz.jpeg'
          border={true}
          description={
            <Stack textAlign='justify' py={10} spacing={4}>
              <Box>
                Vos pas vous mènent vers un espace foisonnant de fleurs de
                toutes les tailles, toutes les couleurs, toutes les formes. Au
                pied de la statue vous pouvez lire une inscription :
              </Box>
              <Box
                as='i'
                textAlign='center'
                fontWeight='semibold'
                fontFamily='diphylleia'
              >
                &quot;Je suis le souffle qui donne vie aux idées.&quot;
              </Box>
            </Stack>
          }
        />
        <Path
          url='https://i.imgur.com/bnyGDE9.jpeg'
          border={true}
          description={
            <Stack textAlign='justify' py={10} spacing={4}>
              <Box>
                Vous apercevez une jungle mystérieuse vers laquelle vous avez
                irrésistiblement envie d&apos;aller... Chaque pas révèle un
                monde de mystères et de merveilles, l&apos;exploration dévoile
                des secrets anciens enfouis sous le feuillage dense.
              </Box>
              <Box
                as='i'
                textAlign='center'
                fontWeight='semibold'
                fontFamily='diphylleia'
              >
                &quot;Je suis cachée dans les profondeurs de l&apos;inconnu,
                attisant une flamme...&quot;
              </Box>
            </Stack>
          }
        />
        <Path
          url='https://i.imgur.com/dVkMcNm.jpeg'
          border={false}
          description={
            <Stack textAlign='justify' py={10} spacing={4}>
              <Box>
                Votre regard se lève vers le ciel alors que vous vous approchez
                de cet arbre imposant, ses branches s&apos;étendant comme des
                bras ouverts vers l&apos;horizon. Ce pommier grouillant de vie,
                nourrit de ses fruits, protège de son ombre et sait aussi
                abriter oiseaux et insectes.
              </Box>
              <Box as='i' textAlign='center' fontWeight='semibold'>
                &quot; Je suis le gardien de la diversité, capable de
                m&apos;adapter à chaque changement. &quot;
              </Box>
            </Stack>
          }
        />
      </HStack>
      <Answer next={next} />
    </Stack>
  );
}
