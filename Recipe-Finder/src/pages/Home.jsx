import React, { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { RecipeList } from '../components/RecipeList'
import { RecipeDetails } from '../components/RecipeDetails'

export function Home() {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data = await response.json()
      if (data.meals) {
        setRecipes(data.meals)
      } else {
        setRecipes([])
        setError('No recipes found. Try another search term.')
      }
    } catch (err) {
      setError('An error occurred while fetching recipes. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Find Your Perfect Recipe</h2>
      <SearchBar onSearch={handleSearch} />
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
      )}
    </div>
  )
}