import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/rickApi';
import CharacterCard from '../components/CharacterCard';
import FilterBar from '../components/FilterBar';
import { motion } from 'framer-motion';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState(null);

  const getData = async () => {
    try {
      const data = await fetchCharacters(page, filters);
      setCharacters(data.results);
      setInfo(data.info);
    } catch (err) {
      setCharacters([]);
      setInfo(null);
    }
  };

  useEffect(() => {
    getData();
  }, [filters, page]);

  return (
    <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1 className="text-3xl font-bold mb-4">Characters</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="character-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.length
          ? characters.map(c => <CharacterCard key={c.id} character={c} />)
          : <p>No results.</p>}
      </div>
      {info && (
        <div className="flex justify-center mt-8 gap-4">
          <button
            disabled={!info.prev}
            onClick={() => setPage(prev => prev - 1)}
            className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            disabled={!info.next}
            onClick={() => setPage(prev => prev + 1)}
            className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default CharacterList;
