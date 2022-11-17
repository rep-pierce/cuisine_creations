import React, {useEffect, useState} from "react";
import LoginCard from "./LoginCard.js"
import NewUserCard from "./NewUserCard.js";
import { useNavigate } from "react-router-dom";

function LoginPage({loggedin, setLoggedin, setUser, setUsersname, setUsername, setAge, setPassword, usersname, username, age, password, users, setUsers}){
    const navigate = useNavigate()
    const [display, setDisplay] = useState("none")

    function handleDisplay() {
        switch (display){
            case "login":
                return <LoginCard sU={setUsername} sP={setPassword} loggedin={loggedin} setLoggedin={setLoggedin} setUser={setUser} username={username} password={password} setUsername={handleUsername} setPassword={handlePassword} users={users} />
            case "new":
                return <NewUserCard age={age} username={username} usersname={usersname} password={password} users={users} setUsers={setUsers} sUsn={setUsersname} setUsersname={handleUsersname} sA={setAge} setAge={handleAge} sU={setUsername} setUsername={handleUsername} sP={setPassword} setPassword={handlePassword} />
            case "none":
                return null
        }
    }

    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleUsersname(e){
        setUsersname(e.target.value)
    }
    function handleAge(e){
        setAge(e.target.value)
    }

    function handleLogIn () {
        setDisplay("login")
    }

    function handleNewUser () {
        setDisplay("new")
    }

    function handleHome(){
        setLoggedin('no')
        navigate('/')
    }

    return(
    <div>
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleNewUser}>Create Account</button>
        <button onClick={handleHome}>Return to Homepage</button>
        {loggedin ? null : handleDisplay()}
        {loggedin ? <p>Logged in Successfully!</p> : <p>Not Logged In</p>}
    </div>
    )

}

export default LoginPage