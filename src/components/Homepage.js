import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./Recipecard"
import SearchBar from "./Searchbar";
import UserCard from "./Usercard";
import CreateIngredient from "./Createingredient"

function HomePage({ 
    inList, setInList, recipes, 
    totalCalories, setTotalCalories, loggedin, 
    setLoggedin, setUser, search, 
    setSearch, filterState, setFilterState, 
    user, password, setPassword,  setsRecipe, 
    list, setList, users, setUsers, setInRecipe, 
    inRecipe, name, setName, calories, 
    setCalories, picture, setPicture }){
    const navigate = useNavigate()
    const [form, setForm] = useState(false)



    function createRecipeCards() {
        return recipes.map(recipe => <RecipeCard key={recipe.id} inList={inList} user={user} picture={recipe.picture} name={recipe.name} id={recipe.id} setsRecipe={setsRecipe} recipe={recipe} list={list} setList={setList} setInRecipe={setInRecipe} inRecipe={inRecipe}/> )
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
    function createForm(){
        setForm(!form)
    }
    function handleCreateForm(){
        return <CreateIngredient form={form} setForm={setForm} name={name} setName={setName} calories={calories} setCalories={setCalories} picture={picture} setPicture={setPicture} />
    }
    
    return(
    <div className="Home-page-div">
        <div className='Home-login-div'>{loggedin ? <button className='button'onClick={logOut}>Log Out</button> : <button className='button' onClick={loginNav}>Log In</button>}</div>
        <div className ="Home-search-div"><SearchBar search={search} setSearch={setSearch} filterState={filterState} setFilterState={setFilterState} /></div>
        <div className='Home-recipe-div'>{createRecipeCards()}</div>
        <div className='Home-list-div'><button className='button' onClick={handleList}>Click To See List</button></div>
        <div className='Home-list-div'><button className='button' onClick={createForm}>Add Ingredient to the Database</button></div>
        { form ? handleCreateForm() : null }
        <div className="Home-user-div">{loggedin ? <UserCard user={user} password={password} setPassword={setPassword} setLoggedin={setLoggedin} setUser={setUser} users={users} setUsers={setUsers}/> : null}</div>
    </div>
    )

}
export default HomePage