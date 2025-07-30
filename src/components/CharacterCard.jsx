import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CharacterCard = ({ character }) => (
  <motion.div
    className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition"
    whileHover={{ scale: 1.05 }}
    layout
  >
    <Link to={`/characters/${character.id}`}>
      <img src={character.image} alt={character.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p className="text-sm text-gray-400">{character.species} | {character.status}</p>
      </div>
    </Link>
  </motion.div>
);

export default CharacterCard;
