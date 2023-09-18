import React from 'react';

interface ExpandedCardProps {
  data: {
    img: string;  // <-- Updated this to 'img'
    title: string;
    description: string;
    images: string[];  // <-- Added this to match your data
  };
  onClose: () => void;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ data, onClose }) => {
  return (
    <div className="expanded-card">
      <button onClick={onClose}>Close</button>
      <img src={data.img} alt={data.title} />  {/* Updated this to 'img' */}
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default ExpandedCard;
