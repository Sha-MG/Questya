import { Image } from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';

interface PassionImgProps {
  url: string;
  alt: string;
}

export default function PassionImg({ url, alt }: PassionImgProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${alt}`,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <Image
      ref={setNodeRef}
      src={url}
      alt={alt}
      w='200px'
      filter='grayscale(1)'
      border='1px solid'
      transition='all 0.3s ease-in-out'
      _hover={{
        borderColor: 'white',
        transform: 'scale(1.1)',
        boxShadow: '0 0 10px 5px #E9E6DD',
        zIndex: 2,
      }}
      style={style}
      {...listeners}
      {...attributes}
    />
  );
}
