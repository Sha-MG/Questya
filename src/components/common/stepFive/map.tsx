import { useRef } from 'react';

import { useMouseOverZoom } from '@/hook/hook';
import { Search2Icon } from '@chakra-ui/icons';
import { Box, HStack, Image } from '@chakra-ui/react';

export default function Map() {
  const source = useRef<HTMLImageElement>(null);
  const target = useRef<HTMLCanvasElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useMouseOverZoom(source, target, cursor);

  return (
    <HStack position='relative'>
      <HStack position='relative'>
        <Image ref={source} src='map2.jpg' alt='carte' />
        <Box ref={cursor} position='absolute'>
          <Search2Icon width='80px' height='80px' color='#C1DBD6' />
        </Box>
        <Box flex={1} border='5px solid '>
          <canvas ref={target} width='200px' height='200px' />
        </Box>
      </HStack>
    </HStack>
  );
}
