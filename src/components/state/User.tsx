import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export function User() {
    //"useState<AuthUser | null>(null)" this inferes types so you can have the initial state set to null prior to a value being set. Now the inital value is null and the AuthUser values can be used in the setUser function.
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => { setUser({ name:'Emily', email:'elb@funtimes.com'}) }
    const handleLogout = () => { setUser(null) } 

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email}</div>
        </div>
    )
}
