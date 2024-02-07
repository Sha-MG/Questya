import { useState } from 'react';

import { Box, Image, Stack, Text } from '@chakra-ui/react';

import CustomInput from '../common/custom_input';
import Map from '../common/stepFive/map';

interface Step5Props {
  next: () => void;
}

export default function Step5({ next }: Step5Props) {
  const [validate, setValidate] = useState<boolean>(false);

  return (
    <Stack textAlign='justify' spacing={4}>
      <Box>
        Vous poussez doucement la lourde porte de la bibliothèque. À peine
        franchi le seuil, vous êtes accueilli par un monde de savoir, où chaque
        étagère regorge de livres anciens et de parchemins jaunis par le temps.
      </Box>
      <Image src='bibli.jpg' alt='bibliotheque' />
      <Box>
        Vous vous avancez avec émerveillement, laissant vos doigts effleurer les
        reliures des ouvrages, sentant le poids du savoir qui imprègne chaque
        centimètre de cet endroit. Le sol est pavé de dalles aux couleurs vives,
        formant un patchwork multicolore sous vos pieds.
      </Box>
      <Box>
        Vous explorez les différentes sections, découvrant des salles dédiées à
        chaque domaine. La salle de la littérature exhale le parfum enivrant des
        vieux livres, tandis que la salle des sciences naturelles est peuplée de
        spécimens curieux figées dans le temps.
      </Box>
      <Box>
        Une aile singulière attire particulièrement votre attention. Les salles
        que vous traversez vous semblent étrangement familières, bien que vous
        ne puissiez mettre le doigt sur leur origine. Alors que vous arpentez
        ces couloirs, vos pas vous conduisent finalement vers une salle
        intrigante. Au centre de celle-ci trône un piédestal majestueux, sur
        lequel repose une carte détaillant le plan de cette aile.{' '}
      </Box>
      <Box>
        Vous vous apprêtez à la saisir, lorsque vous percevez un léger bruit
        derrière vous. Vous sursautez vivement, réalisant qu&apos;un homme se
        tient à présent à quelques pas de vous.
      </Box>

      <Box fontWeight='medium' color='#807F79'>
        <Text as='span' textDecoration='underline'>
          L&apos;homme :{' '}
        </Text>
        &quot;Je crains que cette carte ne doive rester à sa place, mon
        ami&quot;
      </Box>
      <Box>
        Intrigué, vous lui demandez où trouver cette &quot;perle rare&quot; qui
        alimente votre quête. Il vous regarde alors, un sourire malicieux
        étirant ses lèvres, et répond d&apos;un ton énigmatique :
      </Box>
      <Box fontWeight='medium' color='#807F79'>
        <Text as='span' textDecoration='underline'>
          L&apos;homme :{' '}
        </Text>
        &quot; Eh bien, vous voyez... mes souvenirs sont parfois fugaces. Si
        vous retrouviez le nom de la pièce qui renferme la réponse à votre
        question, je pourrais probablement vous aider. Voilà ce dont je me
        rappelle :
        <Box my={4}>
          <Text>- La salle n&apos;est pas trop éclairée.</Text>
          <Text>- Le JavaScript est un langage propice aux interactions.</Text>
          <Text>
            - La salle n&apos;a pas pour sujet des choses très esthétiques.
          </Text>
          <Text>
            - Elle contient des informations sur une technologie statique.
          </Text>
          <Text>- Elle communique avec React, mais pas avec Figma.</Text>
          <Text>- Illustrator, ou Ai, est un logiciel de graphisme.</Text>
        </Box>
      </Box>
      <Box>
        Muni de ces informations, vous vous penchez vers la carte afin de la
        regarder de plus près et de trouver la salle en question.
      </Box>
      <Map />
      <Box>
        Après de longues minutes d&apos;observation, vous vous retourner vers
        l&apos;homme, et lui annoncez que vous avez trouvé le nom de la salle :
      </Box>
      <CustomInput
        placeholder='Votre réponse'
        answer='HTML'
        indice1="Il est souvent associé à d'autres technologies web telles que CSS et JavaScript, mais il se concentre principalement sur la structure et le contenu des pages."
        indice2="C'est un langage de balisage utilisé pour créer et structurer le contenu des pages web."
        onValidation={() => setValidate(true)}
      />
      {validate && (
        <Box>
          L&apos;homme vous adresse un sourire satisfait, et vous tend un
          parchemin sur lequel est inscrit un message :
        </Box>
      )}
    </Stack>
  );
}
