import React, { useState } from "react";
import { datas } from "./Pro1";
import { useNavigate } from "react-router-dom";

function SearchEngine() {
  const [query, setQuery] = useState(""); // State for storing search query
  const [results, setResults] = useState([]); // State for storing search results
  const navigate = useNavigate();

  // Handle input change and perform search
  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    // Filter results based on name matching the query
    const filteredResults = datas.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults); // Update the results state
  };

  // Handle click on a result
  const handleResultClick = (id) => {
    navigate(`/medicine/${id}`); // Navigate to a new page with the medicine id
    setQuery('');
    setResults('');
  };

  return (
    <div className="max-w-[400px]">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Enter medicine"
        className="border-none outline-none px-4 py-4 mt-3 w-full rounded-full"
      />
      <div className="mt-4 relative">
        {query && results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          results.length > 0 && (
            <div className="absolute top-2 left-0 right-0 bg-white bg-opacity-90 z-50 max-h-60 overflow-auto shadow-lg">
              <ul className="mt-2">
                {results.map((medicine) => (
                  <li
                    key={medicine.id}
                    className="flex items-center mb-3 border p-2 rounded cursor-pointer"
                    onClick={() => handleResultClick(medicine.id)} // Handle click
                  >
                    <img
                      src={medicine.img}
                      alt={medicine.name}
                      className="w-16 h-16 mr-3 rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{medicine.name}</h3>
                      <p className="text-gray-700">{medicine.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SearchEngine;
