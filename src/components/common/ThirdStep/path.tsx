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
}

export default function Path({ url, border, description }: PathProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        h='200px'
        flex={1}
        bg={`url(${url})`}
        bgPosition='center'
        borderRight={border ? '5px solid' : 'none'}
        borderColor='#E1DAD9'
        bgSize='cover'
        transition='all 0.3s'
        _hover={{
          flex: 1.5,
          cursor: 'pointer',
          filter: 'brightness(1)',
          boxShadow: '0 0 10px 5px white',
          zIndex: 4,
        }}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW='60vw'>
          <ModalHeader bgColor='#E8E6DD' />
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
