 import { useState } from "react";

import { useNavigate } from "react-router-dom";

import useDebounce from "../../hooks/useDebounce";



export default function SearchBar() {

  const [query, setQuery] = useState("");

  const navigate = useNavigate();



  const debouncedQuery = useDebounce(query, 500);



  const handleSearch = (e) => {

    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${query}`);

  };



  return (

    <form

      onSubmit={handleSearch}

      className="flex bg-white rounded-xl shadow overflow-hidden"

    >

      <input

        type="text"

        placeholder="Search location, property..."

        value={query}

        onChange={(e) => setQuery(e.target.value)}

        className="flex-1 px-4 py-3 outline-none text-gray-700"

      />



      <button

        type="submit"

        className="bg-red-600 text-white px-6"

      >

        Search

      </button>

    </form>

  );

}