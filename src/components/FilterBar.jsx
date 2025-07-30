import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mb-6 flex flex-wrap gap-4 items-end">
      <input
        type="text"
        name="name"
        placeholder="Search name"
        value={filters.name || ''}
        onChange={handleChange}
        className="px-4 py-2 rounded bg-gray-700 placeholder-gray-400"
      />
      <select name="status" onChange={handleChange} value={filters.status || ''} className="px-3 py-2 bg-gray-700 rounded">
        <option value="">Status</option>
        <option>Alive</option>
        <option>Dead</option>
        <option>unknown</option>
      </select>
      <select name="species" onChange={handleChange} value={filters.species || ''} className="px-3 py-2 bg-gray-700 rounded">
        <option value="">Species</option>
        <option>Human</option>
        <option>Alien</option>
      </select>
      <select name="gender" onChange={handleChange} value={filters.gender || ''} className="px-3 py-2 bg-gray-700 rounded">
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>unknown</option>
      </select>
    </div>
  );
};

export default FilterBar;
