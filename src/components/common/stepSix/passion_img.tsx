import {
  Box,
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
import { useDraggable } from '@dnd-kit/core';

interface PassionImgProps {
  url: string;
  alt: string;
  parent: string;
  color: string;
}

export default function PassionImg({
  url,
  alt,
  parent,
  color,
}: PassionImgProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${alt}`,
    disabled: parent === alt,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const isColored = parent === alt;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return isColored ? (
    <Image
      ref={setNodeRef}
      src={url}
      alt={alt}
      w='full'
      border='10px solid'
      borderColor={color}
    />
  ) : (
    <Box onDoubleClick={onOpen}>
      <Image
        ref={setNodeRef}
        src={url}
        alt={alt}
        w='full'
        filter='grayscale(1)'
        transition='all 0.3s ease-in-out'
        _hover={{
          transform: 'scale(1.1)',
          boxShadow: '0 0 10px 5px #E9E6DD',
          zIndex: 2,
        }}
        style={style}
        {...listeners}
        {...attributes}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW='60vw'>
          <ModalHeader bgColor='#E8E6DD' />
          <ModalCloseButton />
          <ModalBody bgColor='#E8E6DD' zIndex={4}>
            <HStack spacing={10}>
              <Image src={url} alt={alt} filter='grayscale(1)' />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
