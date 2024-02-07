import { Box, Button, Center, Stack } from '@chakra-ui/react';

interface EntryProps {
  next: () => void;
}

export default function Entry({ next }: EntryProps) {
  return (
    <Stack textAlign='justify' spacing={4}>
      <Box>
        Bienvenue dans cette aventure interactive où la technologie, la
        créativité et une pointe d&apos;humour s&apos;allient pour vous offrir
        une quête que j&apos;espère unique !
      </Box>
      <Box>
        À celui qui élucidera les énigmes, chaque étape dévoilera le parcours et
        la personnalité de cette mystérieuse personne.
      </Box>
      <Box>
        La chose que vous devez savoir c&apos;est qu&apos;à chaque fois que
        l&apos;on vous demandera la solution d&apos;une énigme, au bout de 2
        essais vous aurez un indice, au bout de 5 essais vous en aurez un
        second, et au bout de 8 la réponse vous sera donnée.
      </Box>
      <Box>
        Préparez-vous à plonger dans un monde où chaque détail a son importance.
        Êtes-vous prêt à relever le défi ?
      </Box>
      <Center>
        <Button
          bgColor='#CEC2B3'
          _hover={{ bgColor: '#D5C6BA' }}
          onClick={next}
        >
          C&apos;est parti !
        </Button>
      </Center>
    </Stack>
  );
}
