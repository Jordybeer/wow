// components/ExpandedCard.tsx
import { motion, AnimatePresence } from 'framer-motion';

const ExpandedCard = ({ data, setSelectedCard }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="expanded-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedCard(null)}
      >
        {/* Your slideshow and description here */}
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandedCard;