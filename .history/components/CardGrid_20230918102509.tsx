// components/CardGrid.tsx
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { LoremIpsum } from 'lorem-ipsum';
import { SimpleGrid } from '@chakra-ui/react';


const CardGrid: React.FC = () => {


    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });
 const [selectedCard, setSelectedCard] = useState(null); // <-- Define state here

    const data = [
      
      {
        title: 'lorem.generateWords(1)',
        description: 'lorem.generateParagraphs(5)',
        img: 'https://source.unsplash.com/random/150x100?nature,1',
             images: [
          'https://source.unsplash.com/random/300x200?nature,1',
          'https://source.unsplash.com/random/300x200?nature,2',
          'https://source.unsplash.com/random/300x200?nature,3',
        ]},
      {
        img: 'https://source.unsplash.com/random/150x100?city,1',
        title: lorem.generateWords(1),
        description: lorem.generateSentences(5),
        images: [
          'https://source.unsplash.com/random/300x200?city,1',
          'https://source.unsplash.com/random/300x200?city,2',
          'https://source.unsplash.com/random/300x200?city,3',
        ]
      },
      // ... you can add more data here
    ];
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {data.map((item, index) => (
        <Card key={index} data={item} setSelectedCard={setSelectedCard} /> // <-- Pass it down here
      ))}
    </SimpleGrid>
  );
};

export default CardGrid;