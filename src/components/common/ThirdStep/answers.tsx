import { useState } from 'react';

import { Box, Center, Stack } from '@chakra-ui/react';

import CustomButton from '../custom_button';
import CustomInput from './custom_input';

interface AnswersProps {
  next: () => void;
}

export default function Answers({ next }: AnswersProps) {
  const [validatedAnswers, setValidatedAnswers] = useState(0);

  return (
    <Stack spacing={10} textAlign='justify'>
      <Box>
        Vous revoilà devant la chapelle, prêt à déchiffrer l&apos;énigme qui
        vous permettra d&apos;en franchir le seuil. Vous avez récolté trois
        mots-clés, chacun associé à une zone du jardin. Vous vous apprêtez à les
        saisir dans le clavier électronique, espérant que la porte
        s&apos;ouvrira enfin pour vous révéler ses secrets.
      </Box>
      {validatedAnswers === 3 ? (
        <Stack spacing={8}>
          <Box>
            Félicitations, brave recruteur ! Grâce à votre perspicacité et à
            votre détermination, vous avez réussi à débloquer les portes de la
            chapelle des talents. Les serrures se déverrouillent avec un
            cliquetis, révélant un passage menant à l&apos;intérieur. Dans un
            mouvement fluide, vous poussez les portes ouvertes et entrez dans la
            chapelle, le cœur battant d&apos;anticipation. À l&apos;intérieur,
            une atmosphère de sérénité vous enveloppe, tandis que la lueur des
            bougies danse doucement sur les murs de pierre. Vous êtes sur le
            point de découvrir ce que ce lieu mystérieux a à vous offrir.
          </Box>
          <Center>
            <CustomButton action={next} text='En avant' />
          </Center>
        </Stack>
      ) : (
        <Stack>
          <CustomInput
            placeholder='Mot-clé du jardin de roses'
            answer='Créativité'
            indice1="Je suis la force qui transforme les idées en œuvres d'art, un feu intérieur qui brûle d'inspiration et d'originalité."
            indice2="Je suis ce qui anime l'imagination, donnant naissance à de nouvelles idées et à des solutions innovantes."
            onValidation={() => setValidatedAnswers(validatedAnswers + 1)}
          />
          <CustomInput
            placeholder="Mot-clé de l'arbre majestueux"
            answer='Polyvalence'
            indice1="Je suis la capacité à jongler avec différentes tâches, à m'adapter rapidement à de nouveaux défis, tel un caméléon changeant de couleur pour s'adapter à son environnement."
            indice2="Je suis ce qui permet de naviguer aisément entre différents domaines, d'être à l'aise dans des situations variées, tel un couteau suisse prêt à relever n'importe quel défi."
            onValidation={() => setValidatedAnswers(validatedAnswers + 1)}
          />
          <CustomInput
            placeholder='Mot-clé 3 du champs de blé'
            answer='Curiosité'
            indice1="Je suis l'envie irrésistible de percer les mystères du monde, semblable à l'eau qui cherche toujours son chemin."
            indice2="Je suis ce qui pousse à poser des questions, à explorer l'inconnu, à vouloir tout comprendre."
            onValidation={() => setValidatedAnswers(validatedAnswers + 1)}
          />
        </Stack>
      )}
    </Stack>
  );
}
