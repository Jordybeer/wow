import React, { useState, useEffect } from 'react';
import Card from './Card';
import { LoremIpsum } from 'lorem-ipsum';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandedCard from './ExpandedCard';

const CardGrid = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

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

    setData(generatedData);
  }, []);
  return (
    <div className="grid">
      <ul>
        {data.map((item, idx) => (
          <motion.li
            key={idx}
            layoutId={`${item.id}`}
            initial={{ borderRadius: "0.6rem" }}
          >
            <Card data={item} setSelectedCard={setSelectedCard} />
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>
        {selectedCard && <ExpandedCard data={selectedCard} setSelectedCard={setSelectedCard} />}
      </AnimatePresence>
    </div>
  );
};

export default CardGrid;
