// components/CardGrid.tsx
import React from 'react';
import Card from './Card';

const CardGrid = ({ setSelectedCard }) => {
  const data = [
    { 
      img: 'https://source.unsplash.com/random/150x100?nature,1', 
      title: 'Image 1',
      images: [
        'https://source.unsplash.com/random/300x200?nature,1',
        'https://source.unsplash.com/random/300x200?nature,2',
        'https://source.unsplash.com/random/300x200?nature,3',
      ]
    },
    { 
      img: 'https://source.unsplash.com/random/150x100?city,1', 
      title: 'Image 2',
      images: [
        'https://source.unsplash.com/random/300x200?city,1',
        'https://source.unsplash.com/random/300x200?city,2',
        'https://source.unsplash.com/random/300x200?city,3',
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
