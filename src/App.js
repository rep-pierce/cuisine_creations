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
  const [rateRecipes, setRateRecipes] = useState([])
  const [ifRecipes, setIfRecipes] = useState([])

  
  

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
        
        
        />}/>
        <Route exact path = "/login" element={<LoginPage />}/>
        <Route exact path = "/recipe" element={<Recipepage />}/>
        <Route exact path = "/list" element={<ListPage />}/>
      </Routes>
    </div>
  );
}

export default App;
