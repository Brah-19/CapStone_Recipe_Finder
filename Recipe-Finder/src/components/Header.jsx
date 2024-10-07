import React from 'react'
import { Link } from 'react-router-dom'
import { FaUtensils } from 'react-icons/fa'

export function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <FaUtensils className="text-3xl" />
          <h1 className="text-3xl font-bold">SeaBlue Recipes</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200 transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200 transition-colors duration-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200 transition-colors duration-200">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}