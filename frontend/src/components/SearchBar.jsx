import { useState } from 'react';

export default function SearchBar({ onSearch, isLoading }) {
  const [city, setCity] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity || isLoading) {
      return;
    }

    onSearch(trimmedCity);
    setCity(trimmedCity);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="city-search">
        Search city
      </label>
      <input
        id="city-search"
        name="city"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Search for a city"
        autoComplete="off"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}
