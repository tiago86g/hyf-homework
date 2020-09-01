import React, { useState, useEffect, createContext} from 'react'
import SearchInput from "./SearchInput.jsx";
const data = createContext()
const getInput = createContext()

function SearchGitHub() {
    const [user, setUser] = useState();
    const [newUser, setNewUser] = useState();

    const query = (e)=>{
        setUser(e.target.value)
    }

    useEffect(()=>{
        if (user !== undefined){
        fetch(`https://api.github.com/search/users?q=${user}`)
        .then(res => res.json())
        .then(result =>setNewUser(result))}
        }, [user])
        

    return (
        <div>
            <data.Provider value={newUser}>
            <getInput.Provider value={query}>
                <SearchInput/>
            </getInput.Provider>
            </data.Provider>
        </div>
    )
}

export default SearchGitHub;
export {data, getInput}