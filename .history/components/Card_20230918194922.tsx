import { motion } from 'framer-motion';

const Card = ({ data, setSelectedCard }) => {
  return (
    <motion.div
      layoutId={`${data.id}`}
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setSelectedCard(data)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}  // Add this line for exit animation
      transition={{ duration: 0.5 }}  // Add this line to control animation speed
    >
      <img src={data.img} alt={data.title} />
      <h3>{data.title}</h3>
    </motion.div>
  );
};


export default Card;
