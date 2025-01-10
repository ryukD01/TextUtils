import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'What is LibraryTextUtils?',
      content: 'LibraryTextUtils is an interactive web application that allows you to manipulate and analyze text in various ways. It provides features like converting text to uppercase, lowercase, counting vowels and consonants, and more.'
    },
    {
      title: 'How to use LibraryTextUtils?',
      content: 'Simply enter your text in the main text area, then use the buttons below to perform different operations on your text. The results will be displayed instantly, and you can see a summary of your text statistics at the bottom.'
    },
    {
      title: 'Is my text saved or stored?',
      content: 'No, LibraryTextUtils does not save or store any of the text you enter. All operations are performed in your browser, ensuring your privacy and data security.'
    }
  ];

  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4">About LibraryTextUtils</h2>
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <motion.div 
            key={index} 
            className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
            initial={false}
            animate={{ backgroundColor: activeAccordion === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)' }}
          >
            <motion.button 
              className="accordion-header" 
              onClick={() => toggleAccordion(index)}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              {item.title}
              {activeAccordion === index ? <ChevronUp /> : <ChevronDown />}
            </motion.button>
            <AnimatePresence>
              {activeAccordion === index && (
                <motion.div 
                  className="accordion-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

