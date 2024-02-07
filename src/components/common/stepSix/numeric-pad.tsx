import { useEffect, useState } from 'react';

import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Grid, IconButton, Text } from '@chakra-ui/react';

interface NumericPadProps {
  validation: () => void;
}

export default function NumericPad({ validation }: NumericPadProps) {
  const [inputSequence, setInputSequence] = useState('');
  const [message, setMessage] = useState('');
  const [errorCount, setErrorCount] = useState(0);

  const handleKeyPress = (key: any) => {
    setInputSequence((prevSequence) => prevSequence + key);
  };

  const resetSequence = () => {
    setInputSequence('');
    setMessage('');
  };

  useEffect(() => {
    if (inputSequence === correctSequence) {
      validation();
    } else if (inputSequence.length === correctSequence.length) {
      setMessage('Séquence incorrecte. Réessayez.');
      setErrorCount((prevCount) => prevCount + 1);
      setInputSequence('');
    }
  }, [inputSequence, validation]);

  const correctSequence = '618427';

  const buttonColors = [
    { index: 1, color: '#9CBDE0' }, //blue
    { index: 2, color: '#F0A77B' }, //orange
    { index: 3, color: '#AD306E' }, // teal
    { index: 4, color: '#AA96D5' }, //purple
    { index: 5, color: '#CFD0D5' }, // gray
    { index: 6, color: '#D52F36' }, //red
    { index: 7, color: '#F0DE82' }, //yellow
    { index: 8, color: '#BBC99A' }, //green
  ];

  return (
    <Box>
      <Box mb={4} textAlign='center'>
        <Text textAlign='center'>{message}</Text>
        {errorCount >= 6 ? (
          <Text fontWeight='bold'>
            La bonne séquence est :{' '}
            {correctSequence.split('').map((num: any, index) => (
              <Box
                key={index}
                display='inline-block'
                w='20px'
                h='20px'
                bg={buttonColors[num - 1]?.color}
                mx={1}
                borderRadius='md'
              />
            ))}{' '}
          </Text>
        ) : errorCount >= 4 ? (
          <Text fontWeight='bold'>
            Une fois ordonnées les images des pièces à explorer vous donnerons
            le code.
          </Text>
        ) : errorCount >= 2 ? (
          <Text fontWeight='bold'>
            Vous devriez explorer les pièces une fois de plus.
          </Text>
        ) : null}
        {inputSequence && (
          <Text textAlign='center'>
            Votre séquence actuelle est :{' '}
            {inputSequence.split('').map((num: any, index) => (
              <Box
                key={index}
                display='inline-block'
                w='20px'
                h='20px'
                bg={buttonColors[num - 1]?.color}
                mx={1}
                borderRadius='md'
              />
            ))}
          </Text>
        )}
      </Box>
      <Center>
        <Grid templateColumns='repeat(3, 60px)'>
          {buttonColors.map((button) => (
            <Button
              key={button.index}
              mr={2}
              mb={2}
              bgColor={button.color}
              _hover={{
                bg: button.color,
                opacity: 0.8,
                filter: 'brightness(1.1)',
              }}
              onClick={() => handleKeyPress(button.index.toString())}
              size='lg'
            />
          ))}
          <IconButton
            aria-label='Réinitialiser'
            icon={<CloseIcon />}
            mr={2}
            mb={2}
            size='lg'
            onClick={resetSequence}
          />
        </Grid>
      </Center>
    </Box>
  );
}
