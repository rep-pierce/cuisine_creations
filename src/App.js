import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./components/Homepage";
import LoginPage from "./components/Loginpage";
import ListPage from "./components/Listpage";
import Recipepage from "./components/Recipepage";
import './App.css';

function App() {
  const [search, setSearch] = useState('')
  const [filterState, setFilterState] = useState('None')  
  const [recipes, setRecipes] = useState([])
  const [user, setUser] = useState({})
  const [usersname, setUsersname] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [loggedin, setLoggedin] = useState(false)
  const [sRecipe, setsRecipe] = useState([])
  const [rate, setRate] = useState(1)
  const [list, setList] = useState([])
  const [inList, setInList] = useState(false)
  const [inRecipe, setInRecipe] = useState(false)
  const [name, setName] = useState('')
  const [calories, setCalories] = useState(0)
  const [picture, setPicture] = useState('')
  
  useEffect(() => {
    fetch("http://localhost:9292/users")
            .then(r => r.json())
            .then(setUsers)
  }, [])  
  const [rateRecipes, setRateRecipes] = useState([])
  

  
  

  useEffect(() => {
    fetch('http://localhost:9292/recipes')
      .then(r => r.json())
      .then(setRecipes)
  }, [])
  useEffect(() => {
    fetch('http://localhost:9292/byrating')
      .then(r => r.json())
      .then(setRateRecipes)
  }, [])

    const filteringRecipes = recipes.filter((recipe)=> {
      return recipe.name.toLowerCase().includes(search.toLowerCase())
   })

   const filteringRateRecipes = rateRecipes.filter((recipe)=> {
    return recipe.name.toLowerCase().includes(search.toLowerCase())
 })

   function filteredRecipes() {
    if (filterState === "None") {
      return filteringRecipes
    }
    else {
      return filteringRateRecipes
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" 
        element={<HomePage
        recipes={filteredRecipes()}
        search={search}
        setSearch={setSearch}
        filterState={filterState}
        setFilterState={setFilterState}
        loggedin={loggedin}
        setLoggedin={setLoggedin}
        setUser={setUser}
        user={user}
        password={password}
        setPassword={setPassword}
        sRecipe={sRecipe}
        setsRecipe={setsRecipe}
        list={list}
        setList={setList}
        setInList={setInList}
        inList={inList}
        users={users}
        setUsers={setUsers}
        setInRecipe={setInRecipe}
        inRecipe={inRecipe}
        name={name}
        setName={setName}
        calories={calories}
        setCalories={setCalories}
        picture={picture}
        setPicture={setPicture}
        />}/>

        <Route exact path = "/login" 
        element={<LoginPage 
        setUser={setUser}
        setUsersname={setUsersname}
        usersname={usersname}
        password={password}
        setPassword={setPassword}
        setAge={setAge}
        age={age}
        setUsername={setUsername}
        username={username}
        users={users}
        loggedin={loggedin}
        setLoggedin={setLoggedin}
        setUsers={setUsers}
        
        
        />}/>

        <Route exact path = "/recipe" 
        element={<Recipepage 
        sRecipe={sRecipe} 
        setsRecipe={setsRecipe}
        user={user} 
        rate={rate}
        setRate={setRate}
        setInRecipe={setInRecipe}
        inRecipe={inRecipe}
        />}/>
        
        <Route exact path = "/list" 
        element={<ListPage 
        user={user}
        list={list}
        setList={setList}
        setInList={setInList}
        inList={inList}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
