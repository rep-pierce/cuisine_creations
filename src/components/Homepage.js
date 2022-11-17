import React from "react";
import RecipeCard from "./Recipecard"
import SearchBar from "./Searchbar";

function HomePage({recipes, ingredients, search, setSearch, filterState, setFilterState }){

    function createRecipeCards() {
        return recipes.map(recipe => <RecipeCard key={recipe.id} name={recipe.name} id={recipe.id} ingredients={ingredients} /> )
    }
    
    return(
    <div>
        <SearchBar search={search} setSearch={setSearch} filterState={filterState} setFilterState={setFilterState} />
        {createRecipeCards()}
    </div>
    )

}
export default HomePage