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
    >
      <img src={data.img} alt={data.title} />
      <h3>{data.title}</h3>
    </motion.div>
  );
};

export default Card;
