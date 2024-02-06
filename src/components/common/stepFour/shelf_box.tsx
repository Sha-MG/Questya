import {
  Box,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

interface ShelfBoxProps {
  url: string;
  description: string;
  title: string;
}

export default function ShelfBox({ url, description, title }: ShelfBoxProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      h='100px'
      direction='column-reverse'
      filter='brightness(0.6)'
      transition='all 0.1s ease-in-out'
      _hover={{ filter: 'brightness(1)', cursor: 'pointer' }}
      onClick={onOpen}
    >
      <Image
        src={url}
        alt={title}
        objectFit='contain'
        objectPosition='bottom'
        maxH='90%'
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW='60vw'>
          <ModalHeader bgColor='#E8E6DD' />
          <ModalCloseButton />
          <ModalBody bgColor='#E8E6DD'>
            <HStack spacing={10}>
              <Image src={url} alt={title} maxW='300px' maxH='300px' />
              <Box textAlign='justify'>{description}</Box>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
