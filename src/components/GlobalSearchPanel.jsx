import React, { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

export default function GlobalSearchPanel({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const clearSearch = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="bg-white p-3 border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products, orders, or customers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-agri-green focus:ring-1 focus:ring-agri-green"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FiX className="text-sm" />
            </button>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="bg-agri-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  )
}
