import React from 'react';
import { motion } from 'framer-motion';

const bookVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 50
    }
  }),
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const shelfVariants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.5 } },
  exit: { scaleX: 0, transition: { duration: 0.5, delay: 0.5 } }
};

export default function EntranceAnimation() {
  return (
    <motion.div 
      className="entrance-animation"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <motion.div className="bookshelf" variants={shelfVariants} initial="initial" animate="animate" exit="exit">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="book"
            variants={bookVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={i}
          />
        ))}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Welcome to LibraryTextUtils
      </motion.h1>
    </motion.div>
  );
}

