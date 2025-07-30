const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page = 1, filters = {}) => {
  const params = new URLSearchParams({ page, ...filters });
  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) throw new Error('Failed to fetch characters');
  return await res.json();
};

export const fetchCharacterById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Character not found');
  return await res.json();
};
