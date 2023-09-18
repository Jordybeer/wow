import React, { useState, useEffect, Dispatch } from 'react';
import Card from './Card';
import { LoremIpsum } from 'lorem-ipsum';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandedCard from './ExpandedCard';

interface CardGridProps {
  data: any;
  setSelectedCard: Dispatch<any>;
}

const CardGrid: React.FC<CardGridProps> = ({ data, setSelectedCard }) => {

  useEffect(() => {
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

    const generatedData = [
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

  }, []);
  const [index, setIndex] = useState(null);

  return (
    <div className="grid">
      <ul>
  {data.map((item, idx) => (
     <motion.li
      key={idx}
      layoutId={`${item.id}`}
onClick={() => index === null && setIndex(item.title)}
      initial={{ borderRadius: "0.6rem" }}
    >
      <Card data={item} setSelectedCard={setSelectedCard} />
    </motion.li>
        ))}
      </ul>
      <AnimatePresence>
        {setSelectedCard && <ExpandedCard data={setSelectedCard} setSelectedCard={setSelectedCard} />}
      </AnimatePresence>
    </div>
  );
};

export default CardGrid;
