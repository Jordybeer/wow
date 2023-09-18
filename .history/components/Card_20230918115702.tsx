import React from 'react';
import ExpandedCard from './ExpandedCard';

interface CardProps {
  data: {
    img: string;  // <-- Change this to 'img' to match your data
    title: string;
    description: string;
    images: string[];
  };
  setSelectedCard: React.Dispatch<React.SetStateAction<any>>;
}

const Card: React.FC<CardProps> = ({ data, setSelectedCard }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setSelectedCard(data);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="card" onClick={handleOpen}>
        <img src={data.img} alt={data.title} /> {/* Make sure you're using the img field here */}
        <h2>{data.title}</h2>
      </div>
      {isOpen && <ExpandedCard data={data} onClose={handleClose} />}
    </>
  );
};

export default Card;
