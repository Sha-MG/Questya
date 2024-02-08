import { HStack } from '@chakra-ui/react';

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
    <HStack
      fontFamily={`"diphylleia", cursive`}
      bgColor='#988A88'
      color='#E1DAD9'
      fontWeight='semibold'
      textAlign='center'
      p={2}
      transition='all 0.1s'
      _hover={{ cursor: 'pointer', opacity: 0.7 }}
      onClick={action}
      {...(small && { fontSize: 'sm' })}
    >
      {text}
    </HStack>
  );
}
