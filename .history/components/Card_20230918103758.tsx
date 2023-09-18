import React from 'react';
import ExpandedCard from './ExpandedCard';

interface CardProps {
  data: {
    title: string;
    description: string;
    image: string;
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
        <img src={data.image} alt={data.title} />
        <h2>{data.title}</h2>
      </div>
      {isOpen && <ExpandedCard data={data} onClose={handleClose} />}
    </>
  );
};

export default Card;
