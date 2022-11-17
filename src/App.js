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


  useEffect(() => {
    fetch('http://localhost:9292/users/1')
      .then(r => r.json())
      .then(setUser)
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/recipes')
      .then(r => r.json())
      .then(setRecipes)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" 
        element={<HomePage
        recipes={recipes}
        />}/>
        <Route exact path = "/login" element={<LoginPage />}/>
        <Route exact path = "/recipe" element={<Recipepage />}/>
        <Route exact path = "/list" 
        element={<ListPage 
        user={user}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
