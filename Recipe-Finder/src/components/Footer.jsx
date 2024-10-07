import React from 'react'
import { FaHeart } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          Made with <FaHeart className="text-red-500 mx-1" /> by SeaBlue Recipes
        </p>
        <p className="mt-2">&copy; 2023 SeaBlue Recipes. All rights reserved.</p>
      </div>
    </footer>
  )
}