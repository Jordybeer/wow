// pages/index.tsx
import React, { useState } from 'react';
import CardGrid from '../components/CardGrid';
import ExpandedCard from '../components/ExpandedCard';
import Galery from '../components/Galery';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      <CardGrid setSelectedCard={setSelectedCard} />
      {selectedCard && (
        <ExpandedCard data={selectedCard} setSelectedCard={setSelectedCard} />
      )}
    </div>
  );
};

export default Home;
