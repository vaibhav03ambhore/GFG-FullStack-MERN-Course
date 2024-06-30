import React from 'react'
import { useState } from 'react'
import './UserApp.css'

const UserApp = () => {
    const storedUsers=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];

    const [users,setUsers] = useState(storedUsers);
    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');

    const addUser=(e)=>{
        e.preventDefault();
        
        const U={name:user,email:email};
        console.log(U);
        setUsers([...users,U]);
        localStorage.setItem('users',JSON.stringify([...users,U]));
        setUser('');
        setEmail('');
    }
    const deleteAllUsers=()=>{
        setUsers([]);
        localStorage.clear();
    }
    const deleteUser=(index)=>{
        const newUsers=users.filter((user,i)=>i!==index);
        setUsers(newUsers);
        localStorage.setItem('users',JSON.stringify(newUsers));
    }

  return (
    <div className='app'>
        <h1>User App</h1>
        <form className='form' onSubmit={addUser}>
            <input className='' type='text' placeholder='enter user name here' value={user} onChange={(e)=>(setUser(e.target.value))} />
            <input type='Email' placeholder='enter user Email here' value={email} onChange={(e)=>(setEmail(e.target.value))} />
            <button className='btn btn-primary btn-lg' type='submit'>Add User</button>
        </form>
        
        <button className='btn btn-primary btn-lg' onClick={deleteAllUsers}>Delete All</button>
        <hr />
        <h2>List of users</h2>
        <div className='users'>
            {
                users.map((user,index)=>(
                    <div key={index}>
                        {user.name} : {user.email}
                        <button className='btn btn-secondary' onClick={()=>deleteUser(index)}>delete</button>
                    </div>
                ))
            }
        </div>


    </div>
  )
}

export default UserApp