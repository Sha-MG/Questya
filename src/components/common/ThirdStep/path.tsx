import {
  AspectRatio,
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

interface PathProps {
  url: string;
  border: boolean;
  description: string | JSX.Element;
  title: string;
}

export default function Path({ url, border, description, title }: PathProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        h='200px'
        flex={1}
        bg={`url(${url})`}
        bgPosition='center'
        borderRight={border ? '1px solid white' : 'none'}
        bgSize='cover'
        transition='all 0.3s'
        filter={'brightness(0.8)'}
        _hover={{
          flex: 1.5,
          cursor: 'pointer',
          filter: 'brightness(1)',
        }}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW='60vw'>
          <ModalHeader bgColor='#E8E6DD'>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor='#E8E6DD'>
            <Stack>
              <AspectRatio ratio={1 / 1} minW='50vw'>
                <Image src={url} alt={url} />
              </AspectRatio>
              <Box>{description}</Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
