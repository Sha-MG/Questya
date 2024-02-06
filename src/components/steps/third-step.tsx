import { Box, HStack, Stack } from '@chakra-ui/react';

import Answer from '../common/ThirdStep/answers';
import Path from '../common/ThirdStep/path';

interface ThirdStepProps {
  next: () => void;
}

export default function ThirdStep({ next }: ThirdStepProps) {
  return (
    <Stack spacing={4} textAlign='justify'>
      <Box>
        Vous voilà à destination. Vous avancez avec détermination dans le Jardin
        des Talents, attiré par la promesse de découvertes et de défis. Dès les
        premiers pas sur cette terre verdoyante, vous êtes enveloppé par une
        sensation de bien-être, comme si chaque brin d&apos;herbe vous invitait
        à vous aventurer plus loin. Les couleurs vives des fleurs dansent sous
        le doux balancement des branches, et le chant mélodieux des oiseaux
        accompagne vos pas. Le soleil caresse votre peau, apportant avec lui une
        chaleur réconfortante qui vous motive à explorer chaque recoin de ce
        jardin enchanté.
      </Box>
      <Box>
        Au cœur de cet oasis de verdure, votre regard est attiré par une
        structure imposante : une chapelle majestueuse qui se dresse fièrement.
        <Box
          w='full'
          my={4}
          bgImage={'url(chapelle.jpg)'}
          h='350px'
          bgPosition='center'
          bgSize='cover'
        />
        Intrigué par ce bâtiment, vous vous approchez avec l&apos;espoir de
        découvrir ce qu&apos;il renferme. Cependant, à votre grande déception,
        l&apos;entrée de la chapelle est fermée à double tour, vous empêchant
        d&apos;y accéder. Vous tentez de forcer la porte, mais elle reste
        obstinément close.
      </Box>
      <Box>
        Alors que vous vous apprêtez à abandonner tout espoir d&apos;explorer
        cet édifice, votre regard tombe sur un détail : un petit boîtier
        métallique, presque dissimulé sur le côté de la porte. Vous vous
        approchez pour l&apos;examiner de plus près, réalisant qu&apos;il
        s&apos;agit en réalité d&apos;un clavier électronique. Une lueur
        d&apos;espoir naît en vous : peut-être que ce clavier détient la clé
        pour ouvrir la porte verrouillée.
      </Box>
      <Box>
        Une énigme se présente alors à vous : trois mots différents sont
        nécessaires pour déverrouiller la porte. Vous comprenez que votre seule
        option est de partir à la recherche d&apos;indices dispersés à travers
        le jardin. En observant attentivement votre environnement, vous
        remarquez que trois zones distinctes se dessinent : un jardin de roses
        aux couleurs éclatantes, un champ de blé qui ondule doucement dans la
        brise, et un arbre gigantesque dont les branches s&apos;élèvent vers le
        ciel comme des bras accueillants. Au centre de chacune de ces zones
        trône une statue imposante, semblant vous défier de percer le mystère
        qui les entoure.
      </Box>

      <HStack spacing={0} my={10}>
        <Path
          url={'fleurs.jpg'}
          border={true}
          description={
            <Stack textAlign='justify' py={10} spacing={4}>
              <Box>
                Vos pas vous mènent vers un chemin bordé de roses épanouies.
                Leurs pétales délicats dansent au gré du vent, exhalant un
                parfum enivrant qui embaume l&apos;air. Au bout du chemin, vous
                découvrez un kiosque ancien, dont la silhouette se détache
                majestueusement dans le ciel. En son centre, une statue de femme
                se dresse, entourée de six colonnes imposantes. À ses pieds, une
                inscription mystérieuse :
              </Box>
              <Box as='i' textAlign='center' fontWeight='semibold'>
                &quot;Je suis l&apos;éclat des couleurs, le murmure des pétales
                dans le vent, l&apos;arc-en-ciel de l&apos;imagination, le
                pinceau du génie. Je m&apos;épanouis dans la diversité, trouvant
                inspiration dans chaque nuance.&quot;
              </Box>
            </Stack>
          }
          title={'Le jardin de roses'}
        />
        <Path
          url={'arbre.jpg'}
          border={true}
          description={
            <Stack textAlign='justify' py={10} spacing={4}>
              <Box>
                Votre regard se lève vers le ciel alors que vous vous approchez
                de cet arbre imposant, ses branches s&apos;étendant comme des
                bras ouverts vers l&apos;horizon. Son tronc robuste témoigne des
                années écoulées, marqué par les cicatrices du temps. Au cœur de
                cet arbre majestueux, une cavité profonde abrite une statue,
                comme si l&apos;arbre avait lui-même créé cet espace pour
                l&apos;accueillir. Les détails finement sculptés de la statue
                captent votre attention, tandis qu&apos;une inscription
                énigmatique à ses pieds résonne dans votre esprit :
              </Box>
              <Box as='i' textAlign='center' fontWeight='semibold'>
                &quot;Je m&apos;élève vers les cieux, mes branches
                s&apos;étirant dans toutes les directions. Je suis le gardien de
                la diversité, capable de m&apos;adapter à chaque changement de
                saison.&quot;
              </Box>
            </Stack>
          }
          title={"L'arbre majestueux"}
        />
        <Path
          url={'champs.jpg'}
          border={false}
          title={'Le champ de blé'}
          description={
            <Stack textAlign='justify' py={10} spacing={4}>
              <Box>
                La nuit s&apos;installe lentement alors que vous vous enfoncez
                plus profondément dans cette partie du jardin. Le champ de blé
                s&apos;étend à perte de vue, baigné dans la lumière des étoiles
                scintillantes. L&apos;immensité de ce paysage dégage une aura
                d&apos;infini, éveillant en vous un désir d&apos;exploration
                insatiable. Sous le ciel étoilé, vous découvrez une statue
                solitaire, témoignant de la grandeur de cet endroit. Une
                inscription est gravée à ses pieds :
              </Box>
              <Box as='i' textAlign='center' fontWeight='semibold'>
                &quot;Je me balance au gré de la brise, dansant avec légèreté
                sous le soleil ardent. Je suis le symbole de l&apos;exploration
                incessante, toujours en quête de nouveaux horizons.&quot;
              </Box>
            </Stack>
          }
        />
      </HStack>
      <Answer next={next} />
    </Stack>
  );
}
