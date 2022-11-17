import React, {useState, useEffect} from 'react';

function UserCard ({user, password, setPassword}) {
    

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              password: password
              
            }),
          })
            
    }

    return(
    <div className ="userCard">
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Username:{user.username}</p>
        <form onSubmit={handleSubmit}>
            <label>Change Password</label>
                <input
                value = {password}
                type ="text"
                placeholder = "New Password"
                onChange={(e)=> setPassword(e.target.value)}
                />
            
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default UserCard;
