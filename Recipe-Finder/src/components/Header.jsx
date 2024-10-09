import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaUtensils, FaBars, FaTimes } from 'react-icons/fa'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaUtensils className="text-2xl sm:text-3xl" />
            <h1 className="text-xl sm:text-2xl font-bold">SeaBlue Recipes</h1>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
            <NavLink to="/about" isActive={isActive('/about')}>About</NavLink>
            <NavLink to="/contact" isActive={isActive('/contact')}>Contact</NavLink>
          </nav>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/about" isActive={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact" isActive={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ to, children, isActive }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-blue-700 text-white'
          : 'text-blue-100 hover:bg-blue-500 hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children, isActive, onClick }) {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-blue-700 text-white'
          : 'text-blue-100 hover:bg-blue-500 hover:text-white'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}