import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import EntranceAnimation from './components/EntranceAnimation';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showContent, setShowContent] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar 
        title="LibraryTextUtils" 
        theme={theme} 
        toggleTheme={toggleTheme}
        setShowAbout={setShowAbout}
      />
      <AnimatePresence>
        {!showContent && <EntranceAnimation />}
      </AnimatePresence>
      <AnimatePresence>
        {showContent && (
          <div className="container">
            {showAbout ? (
              <About />
            ) : (
              <TextForm heading="Enter your text here to analyze" theme={theme} />
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

