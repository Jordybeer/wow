// components/ExpandedCard.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandedCard = ({ data }) => {
  return (
    <div className="expanded-card">
      <div className="slideshow">
        <img src="https://via.placeholder.com/300" alt="Slide 1" />
        <img src="https://via.placeholder.com/300" alt="Slide 2" />
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </div>
      <div className="description">
        <h3>{data.title}</h3>
        <p>Some description here</p>
      </div>
    </div>
  );
};

export default ExpandedCard;
