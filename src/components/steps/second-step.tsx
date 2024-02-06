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
        dessins mystérieux. Dessus, vous pouvez distinguer que des notes ont été
        prises sur cinq lieux, mais vous ne parvenez pas à lire ce qui est
        écrit.
      </Box>
      <Stack fontWeight='medium' color='#807F79'>
        <Box>
          <Text as='span' textDecoration='underline'>
            L&apos;homme mystérieux :{' '}
          </Text>
          &quot; Vous allez devoir vous rendre dans chacun de ces lieux afin de
          vous rapprocher de votre candidate. Ma plume est plus tortueuse que
          les chemins de l&apos;esprit, mais ma parole aussi fidèle que la
          boussole d&apos;un pirate, voici donc les lieux que vous devrez
          trouver :
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            Le Jardin des Talents :
          </Text>{' '}
          Un paradis verdoyant où les qualités des candidats fleurissent comme
          des pétales de printemps.
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            La Chapelle des Expériences :
          </Text>{' '}
          Un lieu empreint de sagesse et de découvertes, où les expériences
          passées guident le chemin vers l&apos;avenir.
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            Les Salles de la Connaissance :{' '}
          </Text>{' '}
          Un ensemble de salles éclairées de la lueur du savoir, où chaque pièce
          renferme un domaine de compétence à explorer.
        </Box>
        <Box>
          <Text as='span' fontWeight='semibold'>
            Le Domaine des Inspirations :{' '}
          </Text>{' '}
          Un royaume enchanté qui incarne les passions les plus profondes et qui
          éveillerai n&apos;importe quel esprit créatif.
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
      <Box
        w='full'
        h='300px'
        bgImage='url(map.jpg)'
        backgroundPosition='center'
        backgroundSize='cover'
        transition='all 0.3s'
        _hover={{ cursor: 'pointer', boxShadow: '0 0 10px 5px #D5C6BA' }}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW='60vw'>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={1 / 1} minW='50vw'>
              <Image src='map.jpg' alt="carte de l'aventure" />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box>
        Au moment où vous quittez du regard la carte, l&apos;homme semble fondre
        dans l&apos;ombre, laissant derrière lui une aura de mystère. Déterminé
        à poursuivre votre quête, vous vous mettez en route vers le Jardin des
        Talents, le premier lieu marqué sur la carte. Marchant d&apos;un pas
        décidé, vous êtes prêt à découvrir ce que ce lieu vous réserve.
      </Box>
      <Stack direction='row' spacing={4}>
        <Center w='full'>
          <CustomButton action={next} text='En avant' />
        </Center>
      </Stack>
    </Stack>
  );
}
