import React from 'react'

export default function SearchInput({users, setUsers}) {
    return (
        <form>
            <input
                type="text"
                placeholder="search for a GitHub user"
                value={users}
                onChange={(e)=>setUsers(e.target.value)}
            />
        </form>
    )
}
