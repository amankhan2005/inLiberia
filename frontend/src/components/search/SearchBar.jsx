 import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaSearch, FaTimes } from "react-icons/fa";

import useDebounce from "../../hooks/useDebounce";


export default function SearchBar() {

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const debouncedQuery = useDebounce(query, 500);



  const handleSearch = (e) => {

    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?search=${query}`);

  };



  const clearSearch = () => {

    setQuery("");

    navigate("/");

  };



  return (

    <form

      onSubmit={handleSearch}

      className="flex items-center bg-white rounded-xl shadow overflow-hidden border"

    >


      {/* SEARCH ICON */}

      <div className="px-3 text-gray-400">

        <FaSearch />

      </div>



      {/* INPUT */}

      <input

        type="text"

        placeholder="Search listings..."

        value={query}

        onChange={(e) => setQuery(e.target.value)}

        className="flex-1 px-2 py-3 outline-none text-gray-700"

      />



      {/* CLEAR BUTTON */}

      {query && (

        <button

          type="button"

          onClick={clearSearch}

          className="px-3 text-gray-400 hover:text-red-500"

        >

          <FaTimes />

        </button>

      )}



      {/* SEARCH BUTTON */}

      <button

        type="submit"

        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"

      >

        Search

      </button>


    </form>

  );

}