import React, { useContext } from 'react'
import {data, getInput} from "./SearchGitHub.jsx"

export default function SearchInput() {
    const userData = useContext(data);
    const query = useContext(getInput);
    console.log(userData);
    return (
        <div>
            <input type="text" onChange={(e)=>query(e)}/>
            {userData.length !== 0 ? 
                userData.items.map((user)=>
                <a key={new Date()}href={user.html_url} alt={user.login}>{user.login}</a>) : 
                <p>no results</p>
            }
        </div>
    )
}