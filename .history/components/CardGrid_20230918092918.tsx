// components/CardGrid.tsx
import React from 'react';
import Card from './Card';

const CardGrid = ({ setSelectedCard }) => {
  const data = [
    { img: 'https://via.placeholder.com/150', title: 'Image 1' },
    { img: 'https://via.placeholder.com/150', title: 'Image 2' },
    { img: 'https://via.placeholder.com/150', title: 'Image 3' },
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
