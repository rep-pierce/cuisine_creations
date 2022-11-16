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
  


  
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<HomePage />}/>
        <Route exact path = "/login" element={<LoginPage />}/>
        <Route exact path = "/recipe" element={<Recipepage />}/>
        <Route exact path = "/list" element={<ListPage />}/>
      </Routes>
    </div>
  );
}

export default App;
