import React, { useState } from 'react';

function SearchBar({ setSearchTerm }) {
  const [searchTerm, setSearchTermLocal] = useState('');

  const handleChange = (e) => {
    setSearchTermLocal(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search transactions..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
