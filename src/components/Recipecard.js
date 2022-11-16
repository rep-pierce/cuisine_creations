import React,  {useState, useEffect} from 'react';
import IngredientCard from './Ingredientcard';

function RecipeCard ({name, id}) {
    const [rating, setRating] = useState(0)
    const [ingredients, setIngredients] = useState([])
    
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
    

    return(
    <div>
        <h1>Recipe</h1>
        <p>{name}</p>
        <p>Rating: {rating.toFixed(1)}</p>
        <h2>Ingredients</h2>
        {createIngredientCard()}
    </div>
    )
}

export default RecipeCard;