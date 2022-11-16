import React from "react";
import RecipeCard from "./Recipecard"

function HomePage({recipes, ingredients}){

    function createRecipeCards() {
        return recipes.map(recipe => <RecipeCard key={recipe.id} name={recipe.name} id={recipe.id} ingredients={ingredients} /> )
    }
    
    return(
    <div>
        {createRecipeCards()}
    </div>
    )

}
export default HomePage