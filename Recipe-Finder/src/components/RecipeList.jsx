import React from 'react'
import { FaUtensils, FaGlobeAmericas } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function RecipeList({ recipes, onSelectRecipe }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center mt-12">
        <FaUtensils className="text-6xl text-blue-500 mx-auto mb-4" />
        <p className="text-xl text-gray-600">No recipes found. Try another search term.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe, index) => (
        <motion.div
          key={recipe.idMeal}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          onClick={() => onSelectRecipe(recipe)}
        >
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{recipe.strMeal}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <FaUtensils className="mr-2" />
              <p>{recipe.strCategory}</p>
            </div>
            <div className="flex items-center text-gray-600">
              <FaGlobeAmericas className="mr-2" />
              <p>{recipe.strArea}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}