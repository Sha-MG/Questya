import { useState } from 'react';

import { Box, Center, Stack } from '@chakra-ui/react';

import CustomButton from '../common/custom_button';
import Shelf from '../common/stepFour/shelf';
import CustomInput from '../common/ThirdStep/custom_input';

interface Step4Props {
  next: () => void;
}

export default function Step4({ next }: Step4Props) {
  const [validate, setValidate] = useState<boolean>(false);

  return (
    <Stack textAlign='justify' spacing={4}>
      <Box>
        Dans l&apos;antre sacrée de la chapelle, vous êtes accueilli par la
        lumière tamisée des bougies, dont les flammes vacillantes projettent des
        éclats de chaleur sur les murs de pierre. Les vitraux colorés laissent
        filtrer des lueurs chatoyantes qui dansent sur le sol poli, créant une
        ambiance envoûtante.
      </Box>
      <Box
        w='full'
        my={10}
        bgImage={'url(interieur_chapelle.jpg)'}
        h='350px'
        bgPosition='center'
        bgSize='cover'
      />
      <Box>
        Vous vous enfoncez un peu plus dans cette chapelle, laissant la lumière
        tamisée des bougies guider vos pas à travers les ténèbres. Au cœur de
        celle-ci, une pièce majestueuse se dresse, révélant une imposante
        étagère en bois sculpté, surplombée d&apos;une myriade de trophées
        étincelants.
      </Box>
      <Box>
        Chaque récompense semble renfermer une histoire unique de succès et
        d&apos;accomplissement, témoignant des exploits passés de ceux qui les
        ont mérités. Un frisson d&apos;excitation parcourt votre échine alors
        que vous vous approchez de cet impressionnant présentoir. Une fois
        suffisamment près pour distinguer clairement ces objets, le sol craque
        sous votre poids et vous sentez la dalle sur laquelle votre pied se pose
        s&apos;enfoncer légèrement. Un léger grincement retentit dans la pièce,
        annonçant l&apos;apparition d&apos;une porte devant vous. Une
        inscription gravée juste au-dessus de la poignée vous défie de fournir
        un mot, et ainsi percer les mystères de cette chapelle oubliée.
      </Box>
      <Shelf />
      <Box>
        <Box my={10}>
          Alors que vous contemplez les objets mystérieux qui ornent cette
          étagère, un sentiment d&apos;urgence vous envahit. Vous réalisez que
          pour continuer votre quête, vous devez percer le mystère qui entoure
          cette porte. Chacun des artefacts semble contenir une partie du
          parcours de cette fameuse candidate, une facette de son histoire. Avec
          détermination, vous vous tournez vers la porte, prêt à saisir le
          mot-clé qui déverrouillera le chemin vers cette perle rare.
        </Box>
        {validate ? (
          <Box>
            La porte s&apos;ouvre ! Après avoir trouvé le mot de passe et ouvert
            la porte, vous découvrez un nouveau passage qui vous mène vers un
            horizon prometteur : les Salles de la Connaissance.
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
