import React from 'react'
import { FaHeart, FaUtensils } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">About SeaBlue Recipes</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <FaUtensils className="text-6xl text-blue-600" />
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Welcome to SeaBlue Recipes, your go-to destination for delicious and inspiring meal ideas! We're passionate about bringing the joy of cooking to everyone, from beginners to seasoned chefs.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our mission is to make cooking accessible, fun, and rewarding. We believe that good food brings people together and creates lasting memories. That's why we've curated a vast collection of recipes from around the world, ensuring there's something for every taste and occasion.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Whether you're looking for quick weeknight dinners, impressive dishes for special occasions, or healthy meal options, SeaBlue Recipes has got you covered. Our user-friendly search feature allows you to find the perfect recipe in seconds.
        </p>
        <div className="flex items-center justify-center text-blue-600">
          <FaHeart className="mr-2" />
          <p className="font-semibold">Happy cooking!</p>
        </div>
      </div>
    </motion.div>
  )
}