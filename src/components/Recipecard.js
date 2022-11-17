import React,  {useState, useEffect} from 'react';
import IngredientCard from './Ingredientcard';
import { useNavigate } from "react-router-dom";


function RecipeCard ({name, id, setsRecipe, recipe}) {
    const [rating, setRating] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`http://localhost:9292/recipes/${id}/rating`)
          .then(r => r.json())
          .then(setRating)
      }, [])

    useEffect(() => {
      fetch(`http://localhost:9292/recipes/${id}/ingredients`)
        .then(r => r.json())
        .then(setIngredients)
    }, [])

    function createIngredientCard() {
        return ingredients.map(ingredient => <IngredientCard key={ingredient.id} ingredient={ingredient} />)
    }
    function handleClick() {
        setsRecipe(recipe)

        navigate('/recipe')
    }
    

    return(
    <div onClick={handleClick}>
        
        <h1>Recipe</h1>
        <p>{name}</p>
        <p>Rating: {rating.toFixed(1)}</p>
        <h2>Ingredients</h2>
        {createIngredientCard()}
    </div>
    )
}

export default RecipeCard;