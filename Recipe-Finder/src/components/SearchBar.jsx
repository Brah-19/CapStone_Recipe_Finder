import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex shadow-lg rounded-lg overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="flex-grow px-4 py-3 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors duration-200 flex items-center"
        >
          <FaSearch className="mr-2" />
          Search
        </button>
      </div>
    </form>
  )
}