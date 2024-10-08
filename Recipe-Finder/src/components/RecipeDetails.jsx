import React from 'react'
import { FaArrowLeft, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function RecipeDetails({ recipe, onBack }) {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center transition-colors duration-200"
      >
        <FaArrowLeft className="mr-2" />
        Back to Results
      </button>
      <h2 className="text-3xl font-bold mb-4 text-blue-600">{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-64 object-cover rounded-lg mb-6 shadow-md" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Ingredients</h3>
          <ul className="space-y-1">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Instructions</h3>
          <p className="text-gray-700 whitespace-pre-line">{recipe.strInstructions}</p>
        </div>
      </div>
      {recipe.strYoutube && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Video Tutorial</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${recipe.strYoutube.split('v=')[1]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      )}
      {recipe.strSource && (
        <div className="mt-6">
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Full Recipe on TheMealDB
          </a>
        </div>
      )}
    </motion.div>
  )
}