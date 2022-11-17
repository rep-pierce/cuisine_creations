import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./Recipecard"
import SearchBar from "./Searchbar";
import UserCard from "./Usercard";

function HomePage({ inList, setInList, recipes, loggedin, setLoggedin, setUser, search, setSearch, filterState, setFilterState, user, password, setPassword,  setsRecipe, list, setList }){
    const navigate = useNavigate()



    function createRecipeCards() {
        return recipes.map(recipe => <RecipeCard key={recipe.id} inList={inList} user={user} name={recipe.name} id={recipe.id} setsRecipe={setsRecipe} recipe={recipe} list={list} setList={setList}/> )
    }

    function handleList() {
        setInList(true)
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
        {loggedin ? <UserCard user={user} password={password} setPassword={setPassword} setLoggedin={setLoggedin} setUser={setUser}/> : null}
    </div>
    )

}
export default HomePage