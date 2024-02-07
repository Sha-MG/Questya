import { Box } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

interface PassionDroppableProps {
  alt: string;
}

export default function PassionDroppable({ alt }: PassionDroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: `${alt}`,
  });
  return (
    <Box
      ref={setNodeRef}
      w='30%'
      h='300px'
      bg={isOver ? 'green.300' : '#D4C6B9'}
    />
  );
}
