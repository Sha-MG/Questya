import { Box, Flex } from '@chakra-ui/react';

import ShelfBox from './shelf_box';
import ShelfHorizontalSeparator from './shelf_horizontal_separator';
import ShelfVerticalSeparator from './shelf_vertical_separator';

export default function Shelf() {
  return (
    <Box>
      <Box textAlign='center' my={5}>
        Voici l&apos;étagère :
      </Box>
      <Box
        bgImage='https://i.imgur.com/sQGOPRe.jpeg'
        bgPosition='center'
        bgSize='contain'
      >
        <Flex bg='rgba(152, 137, 135, 0.9)'>
          <ShelfVerticalSeparator />
          <Box flex={1}>
            <Box h='10px' bg='#E1DAD9' />
            <ShelfBox
              url='https://i.imgur.com/ZkKQn3I.png'
              description="Posée avec une perfection presque surnaturelle, la sphère évoque une origine venue d'un autre monde, peut-être forgée par une technologie secrète. Son apparence envoûtante suscite des questions : aurait-elle été façonnée par des mains habiles maîtrisant les arcanes de la dimension 3D ? Cette candidate détient-elle les clés pour manipuler les frontières de la réalité ?"
              title='Une sphère'
            />
            <ShelfHorizontalSeparator />
            <ShelfBox
              url='https://i.imgur.com/fgqyRm8.png'
              description="Une lentille curieuse, capable de révéler les secrets les plus profonds de l'univers. Ce microscope, témoin silencieux de découvertes passées, semble refléter la quête insatiable d'une curiosité sans limites."
              title='Un microscope'
            />
            <ShelfHorizontalSeparator />
            <ShelfBox
              url='https://i.imgur.com/S54SYIQ.png'
              description="Une loupe énigmatique, révélant chaque pli et chaque recoin du cerveau humain. Elle semble capturer l'esprit en expansion, prêt à explorer les profondeurs insondables de l'âme humaine. Aurait-elle servi à explorer les méandres de la psyché ?"
              title='Une loupe'
            />
            <ShelfHorizontalSeparator />
            <Box h='42px' bg='#E1DAD9' />
          </Box>
          <ShelfVerticalSeparator />
          <Box flex={1}>
            <Box h='10px' bg='#E1DAD9' />
            <ShelfBox
              url='https://i.imgur.com/6bLMHtG.png'
              description="Une tablette élégante, vibrant d'une énergie créative palpable. Ses courbes fluides et son écran lumineux évoquent un outil de conception moderne, prêt à donner vie aux idées les plus audacieuses. Aurait-elle été le compagnon fidèle d'un artiste visionnaire, explorant les vastes horizons de la conception graphique ? On peux encore apercevoir certains raccourcis, PS, Ai, F..."
              title='Une tablette'
            />
            <ShelfHorizontalSeparator />
            <ShelfBox
              url='https://i.imgur.com/REJHob3.png'
              description="Une bouteille de bière, fièrement posée sur l'étagère, exhale un parfum de découverte et d'aventure. Son étiquette arborant des caractères élégants rappelle les ruelles pavées de Bruxelles, où chaque détour révèle un trésor caché. Aurait-elle été témoin des moments de convivialité et d'échange lors d'un séjour enrichissant en Belgique ?"
              title='Une bière'
            />
            <ShelfHorizontalSeparator />
            <ShelfBox
              url='https://i.imgur.com/xn3hrq5.png'
              description="Une maquette miniature de maison trône sur l'étagère, évoquant le début d'une aventure entrepreneuriale. Ses contours nets et ses lignes élégantes semblent narrer une histoire de travail acharné et d'innovation. Vous ne sauriez pas exactement dire pourquoi mais vous ressentez l'effervescence startup dynamique, où chaque jour serait une nouvelle opportunité de repousser les frontières de ses connaissances."
              title='Une maison'
            />
            <ShelfHorizontalSeparator />
            <Box h='42px' bg='#E1DAD9' />
          </Box>
          <ShelfVerticalSeparator />
          <Box flex={1}>
            <Box h='10px' bg='#E1DAD9' />
            <ShelfBox
              url='https://i.imgur.com/b0hrc2r.png'
              description="Un trophée en forme de cœur trône fièrement parmi les autres objets, évoquant une expérience enrichissante et altruiste. Son éclat et sa forme singulière semblent raconter une histoire de générosité et d'engagement envers la communauté. Il semble témoigner des précieux moments passés à contribuer a un projet humanitaire."
              title='Un trophée'
            />
            <ShelfHorizontalSeparator />
            <ShelfBox
              url='https://i.imgur.com/WJ4o6q8.png'
              description="Sur l'une des étagères trône un objet intrigant, une machine aux contours mystérieux qui semble renfermer les secrets de l'univers numérique. Ses lignes futuristes racontent une histoire de création et d'innovation, où chaque touche pressée révèle un fragment du savoir caché dans les méandres du code. Cet étrange artefact semble être le gardien de connaissances enfouies, attendant patiemment que quelqu'un vienne les déchiffrer et les libérer dans le monde numérique."
              title='Un ordinateur'
            />
            <ShelfHorizontalSeparator />
            <ShelfBox
              url='https://i.imgur.com/OE3yaX5.png'
              description="Enfin, votre regard est captivé par un objet tout aussi mystérieux que charmant. Un petit pot orné de pinceaux délicats émerge au milieu des autres artefacts, semblant inviter à une exploration artistique. Ses couleurs vives et ses détails minutieux évoquent un monde d'imagination et de créativité, où chaque coup de pinceau raconte une histoire et chaque couleur révèle une émotion. Il semble être le gardien de rêves enfouis, attendant patiemment qu'un artiste curieux vienne les libérer et les partager avec le monde."
              title='Un pot'
            />
            <ShelfHorizontalSeparator />
            <Box h='42px' bg='#E1DAD9' />
          </Box>
          <ShelfVerticalSeparator />
        </Flex>
      </Box>
    </Box>
  );
}
