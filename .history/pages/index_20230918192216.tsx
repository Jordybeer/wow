import React, { useState } from 'react';
import CardGrid from '../components/CardGrid';
import ExpandedCard from '../components/ExpandedCard';



const IndexPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  
  return (
    <div>
      <CardGrid setSelectedCard={setSelectedCard} data={undefined} />
      {selectedCard && <ExpandedCard data={selectedCard} setSelectedCard={setSelectedCard} />}
    </div>
  );
};



export default IndexPage;
