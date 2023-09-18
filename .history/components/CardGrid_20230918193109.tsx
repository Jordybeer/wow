import React, { useState, useEffect, Dispatch } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandedCard from './ExpandedCard';

interface CardGridProps {
  data: any;
  setSelectedCard: Dispatch<any>;
}

const CardGrid: React.FC<CardGridProps> = ({ data, setSelectedCard }) => {
  const [index, setIndex] = useState(null); // Declare index state here

  return (
    <div className="grid">
      <ul>
        {data && data.length > 0 ? (
          data.map((item, idx) => (
            <motion.li
              key={idx}
              layoutId={`${item.id}`}
              onClick={() => index === null && setIndex(item.title)}
              initial={{ borderRadius: "0.6rem" }}
            >
              <Card data={item} setSelectedCard={setSelectedCard} />
            </motion.li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <AnimatePresence>
        {index && <ExpandedCard data={data.find(d => d.title === index)} setSelectedCard={setSelectedCard} />}
      </AnimatePresence>
    </div>
  );
};

export default CardGrid;
