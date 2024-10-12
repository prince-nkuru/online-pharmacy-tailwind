import React, { useState } from "react";
import { datas } from "./Pro1";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SearchEngine() {
  const [query, setQuery] = useState(""); // state for storing search query
  const [results, setResults] = useState([]); // state for storing search results
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
      <div className="mt-4">
        {query && results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul className="mt-2">
            {results.map((medicine) => (
              <li
                key={medicine.id}
                className="flex items-center mb-3  border p-2 rounded cursor-pointer "
                onClick={() => handleResultClick(medicine.id)} // Handle click
              >
                <img
                  src={medicine.img}
                  alt={medicine.name}
                  className="w-16 h-16 mr-3 rounded "
                />
                <div>
                  <h3 className="font-semibold">{medicine.name}</h3>
                  <p className="text-gray-700">{medicine.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchEngine;
