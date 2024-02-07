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
import { Center, ChakraProvider, Container } from '@chakra-ui/react';

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
  return (
    <ChakraProvider>
      <Center w='full' minH='100vh' bgColor='#D5C6BA'>
        <Container maxW='2xl' py={10} bg='#E9E6DD' px={6}>
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
        </Container>
      </Center>
    </ChakraProvider>
  );
}
