import React, {useState, useEffect} from 'react';

function UserCard ({user}) {
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefualt()
        fetch(`http://localhost:9292/Users/${user.id}`, {
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
            <label>
                <p>Change Password</p>
                <input
                value = {password}
                type ="text"
                placeholder = "New Password"
                onChange={(e)=> setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default UserCard;
