import { Box } from '@chakra-ui/react';

interface CustomButtonProps {
  action: () => void;
  text: string;
  small?: boolean;
}
export default function CustomButton({
  action,
  text,
  small,
}: CustomButtonProps) {
  return (
    <Box
      bgColor='#CEC2B3'
      fontWeight={small ? 'regular' : 'semibold'}
      textAlign='center'
      p={2}
      _hover={{ bgColor: '#D5C6BA', cursor: 'pointer' }}
      onClick={action}
      {...(small && { fontSize: 'sm' })}
    >
      {text}
    </Box>
  );
}
