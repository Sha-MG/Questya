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
      fontSize='sm'
      fontWeight='regular'
      bgColor='#D6BFBE'
      transition='all 0.2s'
      borderRadius={0}
      letterSpacing='0.15rem'
      _hover={{
        bgColor: '#c2a7a6',
        color: 'white',
      }}
    >
      {text}
    </Button>
  ) : (
    <Box zIndex={2}>
      <chakra.button className='button' onClick={action} fontSize='sm'>
        {text}
      </chakra.button>
    </Box>
  );
}
