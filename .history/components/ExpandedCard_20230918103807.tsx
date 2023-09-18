import React from 'react';

interface ExpandedCardProps {
  data: {
    title: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ data, onClose }) => {
  return (
    <div className="expanded-card">
      <button onClick={onClose}>Close</button>
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default ExpandedCard;
