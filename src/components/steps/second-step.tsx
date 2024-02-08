import {
  AspectRatio,
  Box,
  Center,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import CustomButton from '../common/custom_button';

interface SecondStepProps {
  next: () => void;
  previous: () => void;
}

export default function SecondStep({ next, previous }: SecondStepProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing={4} textAlign='justify'>
      <Box>
        Vous vous retrouvez face à une carte étrange, ornée de symboles et de
        dessins mystérieux.
      </Box>
      <Stack fontWeight='medium' color='#826651' fontFamily='diphylleia' my={4}>
        <Box>
          &quot; Ma plume est plus tortueuse que les chemins de l&apos;esprit,
          mais ma parole aussi fidèle que la boussole d&apos;un pirate, voici
          donc les lieux que vous devrez trouver :
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            Le Jardin des Talents :
          </Text>{' '}
          Un paradis verdoyant où s&apos;épanouissent ses qualités.
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            La Chapelle des Expériences :
          </Text>{' '}
          Un lieu empreint de sagesse et de découvertes, où ses expériences
          passées guident son chemin vers l&apos;avenir.
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            Les Salles de la Connaissance :{' '}
          </Text>{' '}
          Un ensemble de salles éclairées de la lueur du savoir, où chaque pièce
          renferme un domaine de compétence.
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            Le Domaine des Inspirations :{' '}
          </Text>{' '}
          Un royaume enchanté où règne sa créativité et ses passions les plus
          vives.
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            La Montagne du Destin :{' '}
          </Text>{' '}
          Au sommet de cette montagne légendaire se trouve le point final de
          votre aventure, c&apos;est là que votre candidate vous attend.
          <Text as='i' fontSize='sm'>
            {' '}
            Notez bien que toute ressemblance avec des lieux existants, comme
            dans les aventures épiques d&apos;un certain hobbit, serait purement
            fortuite.
          </Text>
          &quot;
        </Box>
      </Stack>
      <Center>
        <Image
          w='400px'
          src='https://i.imgur.com/KvlpJxn.jpg'
          alt="carte de l'aventure"
          transition='all 0.3s'
          _hover={{ cursor: 'pointer', boxShadow: '0 0 10px 5px #D5C6BA' }}
          onClick={onOpen}
        />
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW='60vw'>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={1 / 1} minW='50vw'>
              <Image
                src='https://i.imgur.com/KvlpJxn.jpg'
                alt="carte de l'aventure"
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box mt={4}>
        Vous relevez les yeux et cherchez l’homme du regard mais… il s’évanouit
        dans l’ombre laissant derrière lui une aura de mystère. Déterminé à
        poursuivre votre quête, vous avancez d’un pas décidé vers le Jardin des
        Talents, première étape de ce surprenant voyage.
      </Box>
      <Stack direction='row' spacing={4}>
        <Center w='full'>
          <CustomButton action={next} text='En avant' />
        </Center>
      </Stack>
    </Stack>
  );
}
