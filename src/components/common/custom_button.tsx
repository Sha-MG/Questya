interface CustomButtonProps {
  action: () => void;
  text: string;
  small?: boolean;
}
import './button.css';

import { Box, Button, chakra } from '@chakra-ui/react';

export default function CustomButton({
  action,
  text,
  small,
}: CustomButtonProps) {
  return small ? (
    <Button
      size='sm'
      bgColor='#D6BFBE'
      transition='all 0.2s'
      _hover={{ bgColor: '#D6BFBE', filter: 'brightness(1.05)' }}
    >
      {text}
    </Button>
  ) : (
    <Box zIndex={2}>
      <chakra.button className='button-52' onClick={action}>
        {text}
      </chakra.button>
    </Box>
  );
}
