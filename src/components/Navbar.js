import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Plane } from 'lucide-react';

export default function Navbar({ title, theme, toggleTheme, setShowAbout }) {
  const planeVariants = {
    dark: { rotate: 0 },
    light: { rotate: 180 }
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <div className="navbar-nav">
          <button className="nav-link" onClick={() => setShowAbout(false)}>
            Home
          </button>
          <button className="nav-link" onClick={() => setShowAbout(true)}>
            About
          </button>
          <motion.button 
            className="theme-toggle" 
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              variants={planeVariants}
              animate={theme}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Plane className="airplane-icon" />
            </motion.div>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

