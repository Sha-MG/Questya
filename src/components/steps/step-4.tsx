import { useState } from 'react';

import { Box, Center, Stack } from '@chakra-ui/react';

import CustomButton from '../common/custom_button';
import CustomInput from '../common/custom_input';
import Shelf from '../common/stepFour/shelf';

interface Step4Props {
  next: () => void;
}

export default function Step4({ next }: Step4Props) {
  const [validate, setValidate] = useState<boolean>(false);

  return (
    <Stack textAlign='justify' spacing={4}>
      <Box>
        Le cœur battant d&apos;anticipation, vous vous glissez dans une vaste
        pièce habitée par la lueur chaude de dizaines de bougies. Le soleil fait
        exploser au sol les couleurs des vitraux, l’atmosphère est envoûtante.
      </Box>
      <Box
        w='full'
        my={10}
        bgImage='https://i.imgur.com/V19ViQH.jpeg'
        h='350px'
        bgPosition='center'
        bgSize='cover'
      />
      <Box>
        Vous vous enfoncez un peu plus dans cette chapelle, laissant la lumière
        tamisée des bougies guider vos pas à travers les ténèbres. Au cœur de
        celle-ci, une pièce majestueuse se dresse.
      </Box>
      <Box>
        Une imposante étagère vous attire ; elle abrite une myriade de trophées
        étincelants. Chaque objet, infiniment précieux, témoigne des luttes, des
        explorations, des succès et réussites de votre candidate. Impatient d’en
        apprendre plus, vous vous saisissez tout à tour de chacun des objets et
        découvrez peu à peu des pans de son histoire ainsi que… des lettres,
        gravées ça ou là…
      </Box>
      <Shelf />
      <Box>
        <Box my={10}>
          Allons bon… Quel mot trouverez-vous en les assemblant ? Et… que faire
          de ce mot ? S’il précise encore la personnalité de cette joyeuse
          candidate, le mot dévoilé va aussi vous faire accéder à un autre de
          ses univers. Vite, saisissez le dans la fenêtre qui vient
          d’apparaître !
        </Box>
        {validate ? (
          <Box>
            Oui ! Encore une victoire. Vous voici donc en chemin vers un horizon
            prometteur : les Salles de la Connaissance.
            <Center my={10}>
              <CustomButton action={next} text="S'élancer vers la suite" />
            </Center>
          </Box>
        ) : (
          <CustomInput
            placeholder='Votre réponse'
            answer='Optimiste'
            indice1='Mon sourire est mon plus fidèle compagnon, même quand les nuages obscurcissent le ciel.'
            indice2='Je suis toujours prêt à voir le verre à moitié plein, même dans les moments les plus sombres. Je suis ?'
            onValidation={() => setValidate(true)}
          />
        )}
      </Box>
    </Stack>
  );
}
