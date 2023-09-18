import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AnimatedGallery.module.css';

export default function AnimatedGallery() {
  const [index, setIndex] = useState<number | false>(false);

  const handleClose = useCallback(() => {
    setIndex(false);
  }, []);

  return (
    <div className={styles.layoutGroup}>
      <ul className={styles.gallery}>
        {[0, 1, 2, 3].map((item) => (
          <motion.li
            className={styles.item}
            key={item}
            layoutId={`${item}`}
            onClick={() => index === false && setIndex(item)}
            initial={{ borderRadius: "0.6rem" }}
          >
            {/* Your existing code for each grid item */}
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>
        {index !== false && (
          <>
            {/* Your modal or expanded view code here */}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
