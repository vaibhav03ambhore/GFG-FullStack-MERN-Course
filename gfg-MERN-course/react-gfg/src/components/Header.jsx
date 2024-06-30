import React from 'react'

const Header = ({props,props2}) => {

    const deleteAll = () => {
        props2({ userData: [] });
        localStorage.clear();
    }

    const addUser = () => {
        const { oneUser, userData } = props;
        if (oneUser) {
            props2(
                (prevState) => ({
                    userData: [...prevState.userData, oneUser],
                    oneUser: '' 
                })
            );
        }
        
    }

    const handleInput = (e) => {
        props2({
            oneUser: e.target.value
        });
    }
  return (
    <div>
        <input type="text" placeholder="type username here!" onChange={handleInput} value={props.oneUser} />
        <br />
        <button onClick={addUser}>Add User ➕</button>
        <br />
        <button onClick={deleteAll}>Delete All users☠️</button>
    </div>
  )
}

export default Header