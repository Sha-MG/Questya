import { Center } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

interface PassionDroppableProps {
  alt: string;
  children: React.ReactNode;
}

export default function PassionDroppable({
  alt,
  children,
}: PassionDroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: `${alt}`,
  });
  return (
    <Center
      ref={setNodeRef}
      w='30%'
      minH='250px'
      m={2}
      mb={6}
      transition='all 0.3s ease-in-out'
      bg={isOver ? '#D3AD7D' : '#D4C6B9'}
    >
      {children}
    </Center>
  );
}
