import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check } from 'lucide-react';

export default function TextForm({ heading, theme }) {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAction = (action) => {
    let newText = '';
    switch (action) {
      case 'uppercase':
        newText = text.toUpperCase();
        break;
      case 'lowercase':
        newText = text.toLowerCase();
        break;
      case 'sentencecase':
        newText = text.replace(/(^\w|\.\s*\w)/gm, c => c.toUpperCase());
        break;
      case 'clear':
        newText = '';
        break;
      default:
        newText = text;
    }
    setText(newText);
    setResult(`Text transformed to ${action}`);
    setShowResult(true);
  };

  const countVowels = () => {
    const vowels = text.match(/[aeiou]/gi);
    setResult(`Number of vowels: ${vowels ? vowels.length : 0}`);
    setShowResult(true);
  };

  const countConsonants = () => {
    const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    setResult(`Number of consonants: ${consonants ? consonants.length : 0}`);
    setShowResult(true);
  };

  return (
    <motion.div 
      className={`text-form ${theme}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4">{heading}</h2>
      <textarea
        className="form-control mb-3"
        rows="8"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your text here"
      ></textarea>
      <div className="button-group">
        {['uppercase', 'lowercase', 'sentencecase', 'clear'].map((action) => (
          <motion.button
            key={action}
            className={`btn ${action === 'clear' ? 'btn-danger' : 'btn-primary'}`}
            onClick={() => handleAction(action)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {action.charAt(0).toUpperCase() + action.slice(1)}
          </motion.button>
        ))}
        <motion.button
          className="btn btn-primary"
          onClick={countVowels}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Count Vowels
        </motion.button>
        <motion.button
          className="btn btn-primary"
          onClick={countConsonants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Count Consonants
        </motion.button>
      </div>
      {showResult && (
        <motion.div 
          className="result"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>
            {result.includes('Error') ? (
              <AlertCircle className="icon-error" />
            ) : (
              <Check className="icon-success" />
            )}
            {result}
          </p>
        </motion.div>
      )}
      <div className="text-summary">
        <p>Words: {text.split(/\s+/).filter(word => word.length > 0).length}</p>
        <p>Characters: {text.length}</p>
      </div>
    </motion.div>
  );
}

