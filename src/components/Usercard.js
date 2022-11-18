import React, {useState, useEffect} from 'react';

function UserCard ({user, password, setPassword, setLoggedin, setUser, users, setUsers}) {
    

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
    function handleClick() {
        fetch(`http://localhost:9292/users/${user.id}`,{
            method: "DELETE",
        })
        .then((r)=> r.json())
        .then((deletedUser)=> setUsers(users.filter(user => user.id !== deletedUser.id)))
        setLoggedin(false)
        setUser({})
        // window.location.href=window.location.href
    
        
    }

    return(
    <div className ="User-card-div">
        <h3>Profile</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Username: {user.username}</p>
        <form onSubmit={handleSubmit}>
            <label>Change Password:</label>
                <input
                value = {password}
                type ="text"
                placeholder = "New Password"
                onChange={(e)=> setPassword(e.target.value)}
                />
            
            <button className='button' type="submit">Submit</button>
        </form>
        <button className='button' onClick={handleClick}>Delete User</button>
    </div>
    )
}

export default UserCard;
