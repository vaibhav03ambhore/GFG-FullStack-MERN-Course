import React from 'react'

const Users = (props) => {
  return (
    <div>
      {
        props.userData?.length === 0 ? <p>No users 👤 found! list is empty🫗</p> :(
           props.userData.map((user, index) => (
                <div key={index}>
                    <p>{user}</p>
                </div>
                
            ))
        )
      }
    </div>
  )
}

export default Users