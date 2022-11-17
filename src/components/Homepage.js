import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./Recipecard"

function HomePage({recipes}){

    const navigate = useNavigate()
    function createRecipeCards() {
        return recipes.map(recipe => <RecipeCard key={recipe.id} name={recipe.name} id={recipe.id} /> )
    }

    function handleClick() {
        navigate('/list')
    }
    
    return(
    <div>
        {createRecipeCards()}
        <button onClick={handleClick}>Click To See List</button>
    </div>
    )

}
export default HomePage