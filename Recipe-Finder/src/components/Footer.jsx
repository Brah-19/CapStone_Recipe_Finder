import React from 'react'
import { FaHeart, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center justify-center md:justify-start">
              Made with <FaHeart className="text-red-500 mx-1" /> by SeaBlue Recipes
            </p>
            <p className="mt-2">&copy; 2024 SeaBlue Recipes. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Brah-19" className="hover:text-blue-200 transition-colors duration-200">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://x.com/oparexoxo?s=11" className="hover:text-blue-200 transition-colors duration-200">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/mr._immanuel?igsh=OHhjZ2RuNTF0bDkx&utm_source=qr" className="hover:text-blue-200 transition-colors duration-200">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}