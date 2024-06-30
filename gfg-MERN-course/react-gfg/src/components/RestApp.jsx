import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const RestApp = () => {
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.data)
        .then((data)=>{
            console.log(data);
            setUserData(data);
        })
    },[])

    return (
        <div>
            <h1>fake data</h1>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <p>Name: <span>{user.name}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                        <p>Phone: <span>{user.phone}</span></p>
                        <br />
                    </div>
                
                ))
            }

        </div>
    )

}

export default RestApp

