import { useState } from 'react';

import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import CustomButton from '../common/custom_button';
import DroppableZone from '../common/stepSix/droppable-zone';
import NumericPad from '../common/stepSix/numeric-pad';

interface Step6Props {
  next: () => void;
}

export default function Step5({ next }: Step6Props) {
  const [validate, setValidate] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack textAlign='justify'>
      <Box>
        Alfred vous dépose avec solennité devant un immense manoir : Le Domaine
        des Inspirations.
      </Box>
      <Image src='domaine.jpg' alt='manoir' />
      <Box>
        Dès les premiers pas à l&apos;intérieur, une atmosphère chargée de
        sérénité et d&apos;envie enrobe vos sens. Chaque pièce semble être un
        monde à part entière, imprégné d&apos;une énergie créative unique.
      </Box>
      <Box>
        {' '}
        Au fond du hall principal, une porte imposante attire votre regard,
        ornée de l&apos;inscription : &quot;Montagne du Destin&quot;. C&apos;est
        là votre destination ultime, le lieu où vous pourrez rencontrer votre
        candidate, enfin ! Mais malgré ses efforts pour l&apos;ouvrir, la porte
        reste impassible, défiant ses attentes. Un pavé numérique capte votre
        attention, ses touches colorées semblant dissimuler un secret
        insaisissable...
      </Box>
      <Box>
        {' '}
        Chaque pièce pourrait receler des indices cruciaux pour percer le
        mystère de cette porte verrouillée. Animé par la curiosité et la
        détermination,vous vous lancez dans l&apos;exploration de ce domaine
        hors du commun.
      </Box>
      {validate ? (
        <Box my={15} fontWeight='bold'>
          Incroyable ! Vous avez réussis, le gros portail s&apos;ouvre enfin.
          Vous voilà à deux pas de la fin de votre aventure. Vous avez hâte de
          rencontrer votre candidate.
          <Center my={5}>
            <CustomButton action={next} text="J'en peux plus du suspens !" />
          </Center>
        </Box>
      ) : (
        <>
          <Center my={10}>
            <CustomButton action={onOpen} text='Explorer les pièces' />
          </Center>
          <Drawer onClose={onClose} isOpen={isOpen} size='full'>
            <DrawerOverlay />
            <DrawerContent bgColor='#E8E6DD'>
              <DrawerCloseButton />
              <DrawerHeader>Le Domaine des Inspirations</DrawerHeader>
              <DrawerBody>
                <Stack>
                  <Box>
                    Votre exploration vous permet de dégager 6 pièces
                    principales qui semblent plus importantes que les autres.
                    Vous devriez réorganiser vos pensées afin de trouver la
                    solution.
                  </Box>
                  <Box>
                    <Text>
                      - Si vous double-cliquez sur une miniature, vous verrez
                      l&apos;image en grand.
                    </Text>
                    <Text>
                      - Vous devez cliquer-glisser chaque miniature à la
                      description de la passion qui lui correspond.
                    </Text>
                  </Box>
                  <DroppableZone />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <NumericPad validation={() => setValidate(true)} />
        </>
      )}
    </Stack>
  );
}
