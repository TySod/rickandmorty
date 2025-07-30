import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <h1 className="text-5xl font-bold mb-4">🛸 Rick & Morty Explorer</h1>
      <p className="text-lg text-gray-400 mb-8">Browse through characters across dimensions!</p>
      <button
        onClick={() => navigate('/characters')}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-lg"
      >
        Enter the Multiverse →
      </button>
    </motion.div>
  );
};

export default Home;
