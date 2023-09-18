// components/CardGrid.tsx
import React from 'react';
import Card from './Card';
import { LoremIpsum } from 'lorem-ipsum';

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

const CardGrid = ({ setSelectedCard }) => {
  const data = [
    {
      img: 'https://source.unsplash.com/random/150x100?nature,1',
      title: lorem.generateWords(1),
      description: lorem.generateSentences(5),
      images: [
        'https://source.unsplash.com/random/300x200?nature,1',
        'https://source.unsplash.com/random/300x200?nature,2',
        'https://source.unsplash.com/random/300x200?nature,3',
      ]
    },
    // ... more data
  ];

  return (
    <div className="grid">
      {data.map((item, index) => (
        <Card key={index} data={item} setSelectedCard={setSelectedCard} />
      ))}
    </div>
  );
};

export default CardGrid;
