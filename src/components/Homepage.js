import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./Recipecard"
import SearchBar from "./Searchbar";

function HomePage({recipes, loggedin, setLoggedin, setUser, search, setSearch, filterState, setFilterState }){
    const navigate = useNavigate()



    function createRecipeCards() {
        return recipes.map(recipe => <RecipeCard key={recipe.id} name={recipe.name} id={recipe.id} /> )
    }

    function handleList() {
        navigate('/list')
    }
    function loginNav() {
        navigate('/login')
    }
    function logOut(){
        setLoggedin(false)
        setUser({})
    }
    
    return(
    <div>
        {loggedin ? <button onClick={logOut}>Log Out</button> : <button onClick={loginNav}>Log In</button>}
        <SearchBar search={search} setSearch={setSearch} filterState={filterState} setFilterState={setFilterState} />
        {createRecipeCards()}
        <button onClick={handleList}>Click To See List</button>
    </div>
    )

}
export default HomePage