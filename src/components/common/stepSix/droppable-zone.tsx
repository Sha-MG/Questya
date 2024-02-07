import { useState } from 'react';

import { Box, Center, HStack, Stack, Text } from '@chakra-ui/react';
import { DndContext } from '@dnd-kit/core';

import PassionDroppable from './passion_droppable';
import PassionImg from './passion_img';

export default function DroppableZone() {
  const containers = ['1', '2', '3', '4', '5', '6'];
  const [activeParents, setActiveParents] = useState(
    Array(containers.length).fill(null)
  );

  const images = [
    { url: 'passions/piece1.jpg', alt: '1', color: '#D52F36' },
    { url: 'passions/piece2.jpg', alt: '2', color: '#9CBDE0' },
    { url: 'passions/piece3.jpg', alt: '3', color: '#BBC99A' },
    { url: 'passions/piece4.jpg', alt: '4', color: '#AA96D5' },
    { url: 'passions/piece5.jpg', alt: '5', color: '#F0A77B' },
    { url: 'passions/piece6.jpg', alt: '6', color: '#F0DE82' },
  ];

  function handleDragEnd(event: any) {
    const { over, active } = event;
    if (active.id !== over?.id) {
      return;
    }

    const updatedActiveParents = [...activeParents];
    const containerIndex = containers.findIndex(
      (containerId) => containerId === over?.id
    );
    updatedActiveParents[containerIndex] = over?.id ?? null;
    setActiveParents(updatedActiveParents);
  }
  const allPassionsPlaced = activeParents.every((parent) => parent !== null);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Stack my={2}>
        {allPassionsPlaced && (
          <Center my={4}>
            <Text fontWeight='bold'>
              Bien, tous le monde est à sa place ! Vous devriez garder ce
              résultat en tête avant de vous diriger à nouveau vers la porte de
              la montagne du destin.
            </Text>
          </Center>
        )}
        <HStack justifyContent='center' mx={2}>
          {containers.map((containerId, index) => (
            <Box key={containerId} w='100px'>
              <PassionImg
                alt={images[index].alt}
                url={images[index].url}
                parent={activeParents[index] ?? 'inconnu'}
                color={images[index].color}
              />
            </Box>
          ))}
        </HStack>
        <Stack
          direction='row'
          flexWrap='wrap'
          justifyContent='space-between'
          flex={1}
        >
          {containers.map((containerId, index) => (
            <PassionDroppable key={containerId} alt={containerId}>
              {containerId === activeParents[index] ? (
                <PassionImg
                  alt={images[index].alt}
                  url={images[index].url}
                  parent={activeParents[index] ?? 'inconnu'}
                  color={images[index].color}
                />
              ) : (
                <Center w='full' textAlign='center' p={4}>
                  {getDescription(containerId)}
                </Center>
              )}
            </PassionDroppable>
          ))}
        </Stack>
      </Stack>
    </DndContext>
  );
}

function getDescription(containerId: string) {
  switch (containerId) {
    case '2':
      return 'Je suis une nation insulaire, où les temples anciens côtoient les gratte-ciel modernes.';
    case '1':
      return ' Je transporte les spectateurs dans des mondes imaginaires.';
    case '3':
      return 'Je suis la vie sauvage dans toute sa diversité, de la jungle dense aux vastes étendues des savanes.';
    case '4':
      return " Je permet d'explorer des mondes virtuels, de relever des défis et de vivre des aventures uniques.";
    case '5':
      return "Je suis l'art qui s'exprime à travers les couleurs et les formes, capturant la beauté du monde sur une toile.";
    case '6':
      return "Je suis le pilier de la vie, où l'amour, le soutien et les liens indéfectibles unissent les individus dans une unité solide et protectrice.";
    default:
      return 'inconnu';
  }
}
