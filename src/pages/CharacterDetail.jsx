import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCharacterById } from '../api/rickApi';
import { motion } from 'framer-motion';

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const data = await fetchCharacterById(id);
        setCharacter(data);
      } catch {
        navigate('/characters');
      }
    };
    getCharacter();
  }, [id, navigate]);

  if (!character) return <p className="text-center p-8">Loading...</p>;

  return (
    <motion.div className=" character-card p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button onClick={() => navigate(-1)} className="text-blue-400 mb-4 hover:underline">← Back</button>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={character.image} alt={character.name} className="w-full md:w-1/3 rounded-lg shadow" />
        <div>
          <h2 className="character-card-title text-3xl font-bold">{character.name}</h2>
          <p className="text-gray-400">{character.species} — {character.status}</p>
          <p className="mt-2"><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
          <p><strong>Location:</strong> {character.location.name}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterDetail;
