import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import { AnimatePresence } from 'framer-motion';


const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
