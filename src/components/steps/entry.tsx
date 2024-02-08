import { Box, Center, Stack } from '@chakra-ui/react';

import CustomButton from '../common/custom_button';

interface EntryProps {
  next: () => void;
  handleEnd: () => void;
}

export default function Entry({ next, handleEnd }: EntryProps) {
  return (
    <Stack textAlign='justify' spacing={4}>
      <Box>
        Bienvenue dans cette aventure interactive où la technologie, la
        créativité et une pointe d&apos;humour s&apos;allient pour vous offrir
        une quête que j&apos;espère unique !
      </Box>
      <Box>
        À chaque étape du parcours celui qui aura su déchiffrer les énigmes
        découvrira un pan de l’expérience, des connaissances ou de la
        personnalité de la facétieuse candidate qui vous accueille dans son
        univers.
      </Box>
      <Box>
        Préparez-vous à plonger dans un monde où chaque détail a son importance.
        Êtes-vous prêt à relever le défi ?
      </Box>
      <Center my={6}>
        <CustomButton action={next} text="C'est parti !" />
      </Center>
      <Box as='i' fontSize='sm'>
        À savoir : Chaque fois que l&apos;on vous demandera la solution
        d&apos;une énigme, au bout de 2 essais vous aurez un indice, au bout de
        4 essais vous en aurez un second, et au bout de 6 la réponse vous sera
        donnée.
      </Box>
    </Stack>
  );
}
