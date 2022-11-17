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

  useEffect(() => {
    fetch("http://localhost:9292/users")
            .then(r => r.json())
            .then(setUsers)
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
        loggedin={loggedin}
        setLoggedin={setLoggedin}
        setUser={setUser}
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
