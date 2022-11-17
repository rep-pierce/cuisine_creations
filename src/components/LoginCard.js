import React, { useState, useEffect } from 'react';

function LoginCard ({sU, sP, setLoggedin, setUser, username, password, setUsername, setPassword, users}) {

    function handleSubmit(e) {
        e.preventDefault()
        users.map(user => {
            if (user.username == username){
                if (user.password == password){
                    setUser(user)
                    sU('')
                    sP('')
                    setLoggedin(true)
                }
        }
    })}
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="uname" value={username} onChange={setUsername} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="pass" value={password} onChange={setPassword} />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
        
        
    </div>
    )
}

export default LoginCard;