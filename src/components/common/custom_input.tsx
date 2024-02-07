import { useState } from 'react';

import { CheckIcon } from '@chakra-ui/icons';
import { Box, HStack, Input, Stack, Text } from '@chakra-ui/react';

import CustomButton from './custom_button';

interface CustomInputProps {
  placeholder: string;
  answer: string;
  indice1: string;
  indice2: string;
  onValidation: () => void;
}

export default function CustomInput({
  placeholder,
  answer,
  indice1,
  indice2,
  onValidation,
}: CustomInputProps) {
  const [input, setInput] = useState<string>('');
  const [isValidate, setIsValidate] = useState<boolean>(false);
  const [errors, setErrors] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleValidate = () => {
    const formattedInput = input.trim();
    const formattedAnswer = answer.trim();

    if (formattedAnswer.toLowerCase() === formattedInput.toLowerCase()) {
      setIsValidate(true);
      onValidation();
    } else {
      setErrors(errors + 1);
    }
  };
  return (
    <>
      {isValidate ? (
        <HStack w='full' justifyContent='space-between' pr={5}>
          <Box>{answer}</Box>
          <CheckIcon color='green.400' />
        </HStack>
      ) : (
        <Stack>
          <HStack>
            <Input
              placeholder={placeholder}
              _placeholder={{ fontSize: 'sm' }}
              border='2px solid'
              _focus={{
                borderColor: '#B89880',
                outlineColor: 'none',
                boxShadow: 'none',
              }}
              _hover={{ borderColor: '#D3AC7C' }}
              bgColor={'#DCDBD5'}
              borderColor={errors >= 1 ? '#B26969' : '#D5C6BA'}
              value={input}
              onChange={handleChange}
            />
            <CustomButton action={handleValidate} text='Valider' small />
          </HStack>
          <Box>
            {errors > 0 && errors < 8 && (
              <Text fontSize='sm' color='#B26969' mb={2}>
                Vous avez fait {errors} erreur{errors > 1 && 's'}.
              </Text>
            )}
            {errors >= 8 ? (
              <Stack color='#B89880' fontSize='sm'>
                <Text>La réponse est : </Text>
                <Text>{answer}</Text>
              </Stack>
            ) : errors >= 5 ? (
              <Stack color='#B89880' fontSize='sm'>
                <Text> Voici un dernier indice pour vous aider : </Text>
                <Stack>
                  <Text>
                    <Text as='span' textDecoration='underline'>
                      Indice 1 :
                    </Text>{' '}
                    {indice1}
                  </Text>
                  <Text>
                    <Text as='span' textDecoration='underline'>
                      Indice 2 :
                    </Text>{' '}
                    {indice2}
                  </Text>
                </Stack>
              </Stack>
            ) : errors >= 2 ? (
              <Stack color='#B89880' fontSize='sm'>
                <Text>
                  Il semblerait que vous ayez besoin d&apos;aide. Voici un
                  premier indice :{' '}
                </Text>
                <Text>
                  <Text as='span' textDecoration='underline'>
                    Indice 1 :
                  </Text>{' '}
                  {indice1}
                </Text>
              </Stack>
            ) : null}
          </Box>
        </Stack>
      )}
    </>
  );
}
