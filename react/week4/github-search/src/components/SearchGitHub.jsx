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
		if (!user) return;

		const fetchData = async () => {
			try {
				const getUsers = await fetch(
					`https://api.github.com/search/users?q=${user}`,
				).then((response) => response.json());

				setData(getUser.items);
			} catch (e) {
				console.log(e.message);
			}
		};

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