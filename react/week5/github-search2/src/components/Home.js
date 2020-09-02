import React, { useState } from 'react'
import SearchInput from "./SearchInput";
import UsersList from "./UsersList";


export default function Home() {
    const [users, setUsers] = useState("")
    
    return (
        <div>
            <SearchInput users={users} setUsers={setUsers}/>
            <UsersList users={users}/>
        </div>
    )
}
