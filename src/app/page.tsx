'use client';

import { useState } from 'react';

import Entry from '@/components/steps/entry';
import FirstStep from '@/components/steps/first-step';
import LastStep from '@/components/steps/last-step';
import SecondStep from '@/components/steps/second-step';
import Step4 from '@/components/steps/step-4';
import Step5 from '@/components/steps/step-5';
import Step6 from '@/components/steps/step-6';
import ThirdStep from '@/components/steps/third-step';
import theme from '@/theme';
import {
  Box,
  Center,
  ChakraProvider,
  Circle,
  Container,
  Image,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepStatus,
  Text,
} from '@chakra-ui/react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const steps = [
    { title: 'Second', description: 'Départ' },
    { title: 'Third', description: 'Première étape' },
    { title: 'Third', description: 'Première étape' },
    { title: 'Third', description: 'Première étape' },
    { title: 'Third', description: 'Première étape' },
    { title: 'Third', description: 'Première étape' },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Center w='full' minH='100vh' bgColor='#D6BFBE'>
        <Container maxW='xl' py={10} bg='#E1DAD9' px={6} pt={0}>
          <Center>
            <Image src='/Questya.png' alt='logo' w='200px' />
          </Center>
          <Stack
            display={{ base: 'flex', lg: 'none' }}
            textAlign='justify'
            spacing={4}
          >
            <Text>
              Bienvenue sur Questya, une aventure en ligne dont le but ultime
              est de trouver la candidate idéale pour votre poste !
            </Text>
            <Text>
              Malheureusement, cette expérience n&apos;est pas encore disponible
              sur mobile. Nous vous invitons à revenir sur un ordinateur afin de
              vivre cette aventure pleinement.
            </Text>
            <Text>A très vite !</Text>
          </Stack>
          {currentStep > 0 && currentStep < 7 && (
            <Stepper index={currentStep - 1} mb={10} size='sm'>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator border='none' bgColor='#E1DAD9'>
                    <StepStatus
                      complete={
                        <Circle bgColor='#D99D5A' size={6}>
                          <StepIcon />
                        </Circle>
                      }
                      active={
                        <Circle
                          bgColor='#E1DAD9'
                          border='3px solid'
                          borderColor='#D99D5A'
                          size={6}
                        />
                      }
                      incomplete={<Circle bgColor='#D6BFBE' size={6} />}
                    />
                  </StepIndicator>
                  <Box
                    w='full'
                    h='2px'
                    bgColor={index < currentStep ? '#D99D5A' : '#D6BFBE'}
                  />
                </Step>
              ))}
            </Stepper>
          )}
          <Box display={{ base: 'none', lg: 'block' }}>
            {currentStep === 0 ? (
              <Entry next={handleNextStep} />
            ) : currentStep === 1 ? (
              <FirstStep next={handleNextStep} previous={handlePreviousStep} />
            ) : currentStep === 2 ? (
              <SecondStep next={handleNextStep} previous={handlePreviousStep} />
            ) : currentStep === 3 ? (
              <ThirdStep next={handleNextStep} />
            ) : currentStep === 4 ? (
              <Step4 next={handleNextStep} />
            ) : currentStep === 5 ? (
              <Step5 next={handleNextStep} />
            ) : currentStep === 6 ? (
              <Step6 next={handleNextStep} />
            ) : (
              <LastStep />
            )}
          </Box>
        </Container>
      </Center>
    </ChakraProvider>
  );
}
