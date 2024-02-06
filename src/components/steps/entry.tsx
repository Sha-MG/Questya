import { Box, Button, Center, Stack } from '@chakra-ui/react';

interface EntryProps {
  next: () => void;
}

export default function Entry({ next }: EntryProps) {
  return (
    <Stack textAlign='justify' spacing={4}>
      <Box>
        Bienvenue dans cette aventure interactive, où la technologie se mêle à
        l&apos;énigme pour créer une expérience unique !
      </Box>
      <Box>
        Dans cette quête pour trouver la candidate idéale, vous allez explorer
        un univers où chaque pièce cache un secret, chaque étape vous
        rapprochant un peu plus de cette mystérieuse personne.
      </Box>
      <Box>
        Préparez-vous à plonger dans un monde où la créativité rencontre la
        technologie et où chaque détail a son importance. Êtes-vous prêt à
        relever le défi ?
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
